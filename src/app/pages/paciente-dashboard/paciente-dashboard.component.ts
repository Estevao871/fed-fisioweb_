import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { Appointment, ProgressNote } from '../../core/models';

@Component({
  selector: 'app-paciente-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paciente-dashboard.component.html',
  styleUrl: './paciente-dashboard.component.scss',
})
export class PacienteDashboardComponent {
  tab: 'agenda' | 'progresso' | 'exercicios' = 'agenda';

  readonly userName = this.authService.getNome();

  upcoming:  Appointment[]  = [];
  completed: Appointment[]  = [];
  notes:     ProgressNote[] = [];
  totalSessions = 0;

  exercises: { icon: string; name: string; sets: string; frequency: string }[] = [];

  constructor(
    private readonly router:      Router,
    private readonly authService: AuthService,
  ) {}

  get progress(): number {
    if (!this.totalSessions) return 0;
    return Math.round((this.completed.length / this.totalSessions) * 100);
  }

  logout(): void {
    this.authService.logout();
    void this.router.navigateByUrl('/login');
  }
}
