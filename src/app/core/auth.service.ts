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

  login(payload: LoginPayload): Observable<LoginResult> {
    return this.http.post<LoginResult>(`${environment.apiUrl}/auth/login`, payload).pipe(
      tap(result => {
        sessionStorage.setItem(this.TOKEN_KEY, result.token);
        sessionStorage.setItem(this.ROLE_KEY,  result.role);
        sessionStorage.setItem(this.ROLES_KEY, JSON.stringify(result.roles?.length ? result.roles : [result.role]));
        sessionStorage.setItem(this.NOME_KEY,  result.nome ?? '');
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.ROLE_KEY);
    sessionStorage.removeItem(this.ROLES_KEY);
    sessionStorage.removeItem(this.NOME_KEY);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  getRole(): string | null {
    return sessionStorage.getItem(this.ROLE_KEY);
  }

  getRoles(): string[] {
    try {
      const roles = JSON.parse(sessionStorage.getItem(this.ROLES_KEY) ?? '[]') as string[];
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
    return sessionStorage.getItem(this.NOME_KEY) ?? '';
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}
