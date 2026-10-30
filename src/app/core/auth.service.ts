import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserType } from './models';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResult {
  token: string;
  role: string;
  roles?: string[];
  nome: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly ROLE_KEY  = 'auth_role';
  private readonly ROLES_KEY = 'auth_roles';
  private readonly NOME_KEY  = 'auth_nome';

  constructor(private readonly http: HttpClient) {}

  /**
   * `lembrar` = true grava a sessão no localStorage (continua logado ao fechar o navegador);
   * false usa o sessionStorage (sai ao fechar a aba/navegador).
   */
  login(payload: LoginPayload, lembrar = false): Observable<LoginResult> {
    return this.http.post<LoginResult>(`${environment.apiUrl}/auth/login`, payload).pipe(
      tap(result => {
        this.logout(); // limpa sessão antiga dos dois storages antes de gravar a nova
        const store = lembrar ? localStorage : sessionStorage;
        store.setItem(this.TOKEN_KEY, result.token);
        store.setItem(this.ROLE_KEY,  result.role);
        store.setItem(this.ROLES_KEY, JSON.stringify(result.roles?.length ? result.roles : [result.role]));
        store.setItem(this.NOME_KEY,  result.nome ?? '');
      })
    );
  }

  logout(): void {
    for (const store of [sessionStorage, localStorage]) {
      store.removeItem(this.TOKEN_KEY);
      store.removeItem(this.ROLE_KEY);
      store.removeItem(this.ROLES_KEY);
      store.removeItem(this.NOME_KEY);
    }
  }

  /** Lê da sessão atual (sessionStorage) ou da lembrada (localStorage). */
  private read(key: string): string | null {
    return sessionStorage.getItem(key) ?? localStorage.getItem(key);
  }

  getToken(): string | null {
    return this.read(this.TOKEN_KEY);
  }

  getRole(): string | null {
    return this.read(this.ROLE_KEY);
  }

  getRoles(): string[] {
    try {
      const roles = JSON.parse(this.read(this.ROLES_KEY) ?? '[]') as string[];
      if (roles.length) return roles.map(r => r.toLowerCase());
    } catch { /* cai no role único */ }
    const role = this.getRole();
    return role ? [role.toLowerCase()] : [];
  }

  hasRole(role: string): boolean {
    return this.getRoles().includes(role.toLowerCase());
  }

  /** Perfil escolhido na tela de login → painel permitido, ou null se o usuário não tem esse perfil. */
  dashboardFor(selected: UserType): UserType | null {
    if (this.hasRole(selected)) return selected;
    // Admin entra pelo painel da recepção
    if (selected === 'recepcionista' && this.hasRole('admin')) return 'recepcionista';
    return null;
  }

  getNome(): string {
    return this.read(this.NOME_KEY) ?? '';
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}
