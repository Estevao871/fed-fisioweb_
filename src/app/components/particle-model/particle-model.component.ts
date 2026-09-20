import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

const TRAIL_STEPS = 5;

@Component({
  selector: 'app-particle-model',
  standalone: true,
  template: `<canvas #canvas></canvas>`,
  styleUrl: './particle-model.component.scss',
})
export class ParticleModelComponent implements AfterViewInit, OnDestroy {
  @Input() modelUrl         = 'assets/runner.glb';
  @Input() colorMain        = '#7c3aed';
  @Input() colorHl          = '#a78bfa';
  @Input() enableTrail      = true;
  @Input() rotationY        = Math.PI / 5;
  @Input() enableMouseRotate = true; // false → câmera fixa (para hotspots)

  @ViewChild('canvas') private canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private group = new THREE.Group();
  private frameId = 0;
  private clock = new THREE.Clock();

  private mouseX = 0;
  private mouseY = 0;
  private mouseClientX = -9999;
  private mouseClientY = -9999;

  private mixer: THREE.AnimationMixer | null = null;
  private gltfScene!: THREE.Object3D;
  private skinnedMeshes: THREE.SkinnedMesh[] = [];
  private sampleStep = 1;
  private hasAnimation = false;

  // Buffers principais
  private mainAttr!: THREE.BufferAttribute;
  private hlAttr!: THREE.BufferAttribute;
  private animatedPos!: Float32Array;
  private restPositions!: Float32Array;
  private mouseDisplace!: Float32Array;
  private particleCount = 0;

  // Rastro — cada slot é uma cópia defasada das posições
  private trailAttrs: THREE.BufferAttribute[] = [];
  // Subamostrado — 1 a cada TRAIL_SKIP para economizar GPU
  private readonly TRAIL_SKIP = 4;
  private trailCount = 0;
  private trailHistory: Array<Float32Array> = []; // ring buffer
  private trailHead = 0;

  private normOffset = new THREE.Vector3();
  private normScale = 1;
  private sizeReady = false;
  private resizeObserver!: ResizeObserver;

  constructor(private readonly ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.init();
    this.loadModel();
    this.startLoop();
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('resize', this.onResize);

    // Garante resize quando o elemento entra em view (scroll reveal, lazy render)
    this.resizeObserver = new ResizeObserver(() => {
      this.sizeReady = false;
      this.resizeToCanvas();
    });
    this.resizeObserver.observe(this.canvasRef.nativeElement.parentElement!);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frameId);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('resize', this.onResize);
    this.resizeObserver?.disconnect();
    this.renderer?.dispose();
  }

  private init(): void {
    const canvas = this.canvasRef.nativeElement;
    this.scene  = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    this.camera.position.set(0, 0, 3);

    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);

    this.scene.add(this.group);
    this.group.rotation.y = this.rotationY;
  }

  private resizeToCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    // Tenta pegar do pai se o canvas ainda não tiver dimensão
    const w = canvas.clientWidth  || canvas.parentElement?.clientWidth  || 0;
    const h = canvas.clientHeight || canvas.parentElement?.clientHeight || 0;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.sizeReady = true;
  }

  private loadModel(): void {
    const loader = new GLTFLoader();
    loader.load(this.modelUrl, (gltf: GLTF) => {
      this.gltfScene  = gltf.scene;
      this.hasAnimation = gltf.animations.length > 0;
      gltf.scene.updateMatrixWorld(true);

      const meshEntries: { mesh: THREE.Mesh; skinned: boolean }[] = [];
      let totalVerts = 0;

      gltf.scene.traverse((child) => {
        const sk = child as THREE.SkinnedMesh;
        const m  = child as THREE.Mesh;
        if (sk.isSkinnedMesh) {
          meshEntries.push({ mesh: sk, skinned: true });
          this.skinnedMeshes.push(sk);
          totalVerts += sk.geometry.getAttribute('position').count;
        } else if (m.isMesh) {
          meshEntries.push({ mesh: m, skinned: false });
          totalVerts += m.geometry.getAttribute('position').count;
        }
      });

      const MAX = 18_000;
      this.sampleStep = Math.max(1, Math.ceil(totalVerts / MAX));
      for (const mesh of this.skinnedMeshes) mesh.skeleton.update();

      const vertex  = new THREE.Vector3();
      const rawPos: number[] = [];
      for (const { mesh, skinned } of meshEntries) {
        const pa = mesh.geometry.getAttribute('position') as THREE.BufferAttribute;
        for (let i = 0; i < pa.count; i += this.sampleStep) {
          vertex.fromBufferAttribute(pa, i);
          if (skinned) (mesh as THREE.SkinnedMesh).applyBoneTransform(i, vertex);
          vertex.applyMatrix4(mesh.matrixWorld);
          rawPos.push(vertex.x, vertex.y, vertex.z);
        }
      }

      const tempGeo = new THREE.BufferGeometry();
      tempGeo.setAttribute('position', new THREE.Float32BufferAttribute(rawPos, 3));
      tempGeo.computeBoundingBox();
      const box = tempGeo.boundingBox!;
      box.getCenter(this.normOffset);
      const sz = new THREE.Vector3();
      box.getSize(sz);
      this.normScale = 2 / Math.max(sz.x, sz.y, sz.z);
      tempGeo.dispose();

      const count = rawPos.length / 3;
      this.particleCount = count;

      const normalized = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        normalized[i * 3]     = (rawPos[i * 3]     - this.normOffset.x) * this.normScale;
        normalized[i * 3 + 1] = (rawPos[i * 3 + 1] - this.normOffset.y) * this.normScale;
        normalized[i * 3 + 2] = (rawPos[i * 3 + 2] - this.normOffset.z) * this.normScale;
      }
      this.restPositions = normalized.slice();
      this.animatedPos   = normalized.slice();
      this.mouseDisplace = new Float32Array(count * 3);

      // Camada principal
      const mainGeo = new THREE.BufferGeometry();
      this.mainAttr = new THREE.BufferAttribute(normalized, 3);
      mainGeo.setAttribute('position', this.mainAttr);
      this.group.add(new THREE.Points(mainGeo, new THREE.PointsMaterial({
        color: new THREE.Color(this.colorMain),
        size: 0.013, sizeAttenuation: true,
        transparent: true, opacity: 0.90,
      })));

      // Camada highlight
      const hlCount = Math.ceil(count / 4);
      const hlArr   = new Float32Array(hlCount * 3);
      for (let i = 0; i < hlCount; i++) {
        hlArr[i * 3]     = normalized[i * 4 * 3];
        hlArr[i * 3 + 1] = normalized[i * 4 * 3 + 1];
        hlArr[i * 3 + 2] = normalized[i * 4 * 3 + 2];
      }
      const hlGeo = new THREE.BufferGeometry();
      this.hlAttr = new THREE.BufferAttribute(hlArr, 3);
      hlGeo.setAttribute('position', this.hlAttr);
      this.group.add(new THREE.Points(hlGeo, new THREE.PointsMaterial({
        color: new THREE.Color(this.colorHl),
        size: 0.020, sizeAttenuation: true,
        transparent: true, opacity: 0.60,
      })));

      // Camadas de rastro (subamostradas) — opcional
      if (this.enableTrail) {
        this.trailCount = Math.ceil(count / this.TRAIL_SKIP);
        for (let t = 0; t < TRAIL_STEPS; t++) {
          const tArr = new Float32Array(this.trailCount * 3);
          for (let i = 0; i < this.trailCount; i++) {
            tArr[i * 3]     = normalized[i * this.TRAIL_SKIP * 3];
            tArr[i * 3 + 1] = normalized[i * this.TRAIL_SKIP * 3 + 1];
            tArr[i * 3 + 2] = normalized[i * this.TRAIL_SKIP * 3 + 2];
          }
          this.trailHistory.push(tArr.slice());
          const geo  = new THREE.BufferGeometry();
          const attr = new THREE.BufferAttribute(tArr, 3);
          geo.setAttribute('position', attr);
          this.trailAttrs.push(attr);
          const fade = 1 - (t + 1) / (TRAIL_STEPS + 1);
          this.group.add(new THREE.Points(geo, new THREE.PointsMaterial({
            color: new THREE.Color(this.colorMain),
            size: 0.009 * fade + 0.004,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.45 * fade * fade,
          })));
        }
      }

      if (this.hasAnimation) {
        this.mixer = new THREE.AnimationMixer(gltf.scene);
        this.mixer.clipAction(gltf.animations[0]).play();
      }

      console.log(`[ParticleModel] ${this.modelUrl} carregado — ${this.particleCount} partículas`);
    },
    undefined,
    (err) => console.error(`[ParticleModel] Falha ao carregar ${this.modelUrl}`, err)
    );
  }

  private extractSkeletonPositions(): void {
    if (!this.skinnedMeshes.length) return;
    this.gltfScene.updateMatrixWorld(true);
    for (const mesh of this.skinnedMeshes) mesh.skeleton.update();

    const vertex = new THREE.Vector3();
    let wi = 0;
    for (const mesh of this.skinnedMeshes) {
      const pa = mesh.geometry.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < pa.count; i += this.sampleStep) {
        if (wi >= this.particleCount) break;
        vertex.fromBufferAttribute(pa, i);
        mesh.applyBoneTransform(i, vertex);
        vertex.applyMatrix4(mesh.matrixWorld);
        this.animatedPos[wi * 3]     = (vertex.x - this.normOffset.x) * this.normScale;
        this.animatedPos[wi * 3 + 1] = (vertex.y - this.normOffset.y) * this.normScale;
        this.animatedPos[wi * 3 + 2] = (vertex.z - this.normOffset.z) * this.normScale;
        wi++;
      }
    }
  }

  private applyShimmer(t: number): void {
    for (let i = 0; i < this.particleCount; i++) {
      const ox = this.restPositions[i * 3];
      const oy = this.restPositions[i * 3 + 1];
      const oz = this.restPositions[i * 3 + 2];
      const w  = Math.sin(t * 1.8 + ox * 6 + oy * 4) * 0.007;
      this.animatedPos[i * 3]     = ox + w;
      this.animatedPos[i * 3 + 1] = oy + w * 0.5;
      this.animatedPos[i * 3 + 2] = oz;
    }
  }

  private updateTrail(): void {
    if (!this.enableTrail || !this.trailAttrs.length) return;
    const slot = this.trailHistory[this.trailHead];
    for (let i = 0; i < this.trailCount; i++) {
      const src = i * this.TRAIL_SKIP;
      slot[i * 3]     = this.animatedPos[src * 3];
      slot[i * 3 + 1] = this.animatedPos[src * 3 + 1];
      slot[i * 3 + 2] = this.animatedPos[src * 3 + 2];
    }

    // Cada camada de rastro pega um slot diferente do histórico (t-1, t-2 …)
    for (let t = 0; t < TRAIL_STEPS; t++) {
      const histIdx = (this.trailHead - t - 1 + TRAIL_STEPS) % TRAIL_STEPS;
      const src  = this.trailHistory[histIdx];
      const attr = this.trailAttrs[t];
      for (let i = 0; i < this.trailCount; i++) {
        attr.setXYZ(i, src[i * 3], src[i * 3 + 1], src[i * 3 + 2]);
      }
      attr.needsUpdate = true;
    }

    this.trailHead = (this.trailHead + 1) % TRAIL_STEPS;
  }

  private getMouseLocal(): THREE.Vector3 | null {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    if (
      this.mouseClientX < rect.left || this.mouseClientX > rect.right ||
      this.mouseClientY < rect.top  || this.mouseClientY > rect.bottom
    ) return null;

    const ndcX = ((this.mouseClientX - rect.left) / rect.width)  * 2 - 1;
    const ndcY = -((this.mouseClientY - rect.top)  / rect.height) * 2 + 1;

    const ndc = new THREE.Vector3(ndcX, ndcY, 0.5);
    ndc.unproject(this.camera);
    const dir = ndc.sub(this.camera.position).normalize();
    if (Math.abs(dir.z) < 0.001) return null;

    const tVal = -this.camera.position.z / dir.z;
    const worldPos = this.camera.position.clone().addScaledVector(dir, tVal);
    return this.group.worldToLocal(worldPos);
  }

  private applyMouseDissolve(mouseLocal: THREE.Vector3 | null): void {
    const RADIUS   = 0.38;
    const STRENGTH = 0.85;
    const LERP_IN  = 0.18;
    const LERP_OUT = 0.07;

    for (let i = 0; i < this.particleCount; i++) {
      const ax = this.animatedPos[i * 3];
      const ay = this.animatedPos[i * 3 + 1];
      const az = this.animatedPos[i * 3 + 2];

      let tdx = 0, tdy = 0, tdz = 0;
      if (mouseLocal) {
        const dx = ax - mouseLocal.x;
        const dy = ay - mouseLocal.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < RADIUS * RADIUS && d2 > 0.0001) {
          const d     = Math.sqrt(d2);
          const force = (1 - d / RADIUS) * STRENGTH;
          tdx = (dx / d) * force;
          tdy = (dy / d) * force;
          tdz = force * 0.4;
        }
      }

      const cx = this.mouseDisplace[i * 3];
      const cy = this.mouseDisplace[i * 3 + 1];
      const cz = this.mouseDisplace[i * 3 + 2];
      const lp = (tdx !== 0 || tdy !== 0) ? LERP_IN : LERP_OUT;

      this.mouseDisplace[i * 3]     = cx + (tdx - cx) * lp;
      this.mouseDisplace[i * 3 + 1] = cy + (tdy - cy) * lp;
      this.mouseDisplace[i * 3 + 2] = cz + (tdz - cz) * lp;

      this.mainAttr.setXYZ(
        i,
        ax + this.mouseDisplace[i * 3],
        ay + this.mouseDisplace[i * 3 + 1],
        az + this.mouseDisplace[i * 3 + 2],
      );
    }

    const hlCount = this.hlAttr.count;
    for (let i = 0; i < hlCount; i++) {
      const src = i * 4;
      if (src >= this.particleCount) break;
      this.hlAttr.setXYZ(i,
        this.mainAttr.getX(src),
        this.mainAttr.getY(src),
        this.mainAttr.getZ(src),
      );
    }

    this.mainAttr.needsUpdate = true;
    this.hlAttr.needsUpdate   = true;
  }

  private startLoop(): void {
    this.ngZone.runOutsideAngular(() => {
      const tick = () => {
        this.frameId = requestAnimationFrame(tick);
        if (!this.sizeReady) this.resizeToCanvas();

        const delta = this.clock.getDelta();
        const t     = this.clock.elapsedTime;

        if (this.mainAttr) {
          if (this.mixer) {
            this.mixer.update(delta);
            this.extractSkeletonPositions();
          } else {
            this.applyShimmer(t);
          }

          this.updateTrail();

          const mouseLocal = this.getMouseLocal();
          this.applyMouseDissolve(mouseLocal);
        }

        if (this.enableMouseRotate) {
          const targetY = this.rotationY + this.mouseX * 0.4;
          this.group.rotation.y += (targetY - this.group.rotation.y) * 0.04;
          this.group.rotation.x += (this.mouseY * 0.1 - this.group.rotation.x) * 0.04;
        }

        this.renderer.render(this.scene, this.camera);
      };
      tick();
    });
  }

  private onMouseMove = (e: MouseEvent): void => {
    this.mouseX       = (e.clientX / window.innerWidth  - 0.5) * 2;
    this.mouseY       = -(e.clientY / window.innerHeight - 0.5) * 2;
    this.mouseClientX = e.clientX;
    this.mouseClientY = e.clientY;
  };

  private onResize = (): void => {
    this.sizeReady = false;
    this.resizeToCanvas();
  };
}
