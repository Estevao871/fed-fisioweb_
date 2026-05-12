import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResult {
  token: string;
  role: string;
  nome: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly ROLE_KEY  = 'auth_role';
  private readonly NOME_KEY  = 'auth_nome';

  constructor(private readonly http: HttpClient) {}

  login(payload: LoginPayload): Observable<LoginResult> {
    return this.http.post<LoginResult>(`${environment.apiUrl}/auth/login`, payload).pipe(
      tap(result => {
        sessionStorage.setItem(this.TOKEN_KEY, result.token);
        sessionStorage.setItem(this.ROLE_KEY,  result.role);
        sessionStorage.setItem(this.NOME_KEY,  result.nome ?? '');
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.ROLE_KEY);
    sessionStorage.removeItem(this.NOME_KEY);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  getRole(): string | null {
    return sessionStorage.getItem(this.ROLE_KEY);
  }

  getNome(): string {
    return sessionStorage.getItem(this.NOME_KEY) ?? '';
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}
