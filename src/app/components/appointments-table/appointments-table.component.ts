import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Appointment } from '../../core/models';

interface PatientGroup {
  key: string;
  name: string;
  phone: string | undefined;
  sessions: Appointment[];
}

@Component({
  selector: 'app-appointments-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointments-table.component.html',
  styleUrl: './appointments-table.component.scss',
})
export class AppointmentsTableComponent {
  @Input()  appointments: Appointment[] = [];
  @Output() edit       = new EventEmitter<Appointment>();
  @Output() remove     = new EventEmitter<string>();
  @Output() reschedule = new EventEmitter<Appointment>();

  searchTerm   = '';
  filterStatus = 'all';
  filterType   = 'all';
  filterDate   = this.todayISO();

  page              = 0;
  readonly pageSize = 10;
  readonly Math     = Math;

  expandedGroups = new Set<string>();

  /* ── Filters ── */
  private todayISO(): string { return new Date().toISOString().split('T')[0]; }

  private isoToBR(iso: string): string {
    if (!iso) return '';
    const [y, m, d] = iso.split('-');
    return `${d}/${m}/${y}`;
  }

  clearDateFilter(): void { this.filterDate = ''; this.page = 0; }
  todayFilter():     void { this.filterDate = this.todayISO(); this.page = 0; }
  onFilterChange():  void { this.page = 0; }

  filtered(): Appointment[] {
    const s      = this.searchTerm.toLowerCase();
    const dateBR = this.isoToBR(this.filterDate);
    return this.appointments.filter(a => {
      const matchSearch = a.patient.toLowerCase().includes(s) || (a.phone ?? '').includes(s);
      const matchDate   = !dateBR || a.date === dateBR;
      const matchStatus = this.filterStatus === 'all' || a.status === this.filterStatus;
      const matchType   = this.filterType   === 'all' || a.type   === this.filterType;
      return matchSearch && matchDate && matchStatus && matchType;
    });
  }

  /* ── Grouping ── */
  patientGroups(): PatientGroup[] {
    const map = new Map<string, PatientGroup>();
    for (const appt of this.filtered()) {
      const key = appt.pacienteId ?? appt.patient;
      if (!map.has(key)) {
        map.set(key, { key, name: appt.patient, phone: appt.phone, sessions: [] });
      }
      map.get(key)!.sessions.push(appt);
    }
    // ordena grupos pelo nome do paciente
    return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
  }

  get totalPages(): number { return Math.ceil(this.patientGroups().length / this.pageSize); }
  get pagedGroups(): PatientGroup[] {
    const s = this.page * this.pageSize;
    return this.patientGroups().slice(s, s + this.pageSize);
  }

  nextPage(): void { if (this.page < this.totalPages - 1) this.page++; }
  prevPage(): void { if (this.page > 0) this.page--; }

  toggleGroup(key: string): void {
    this.expandedGroups.has(key) ? this.expandedGroups.delete(key) : this.expandedGroups.add(key);
  }

  /* ── Helpers ── */
  proximaSessao(sessions: Appointment[]): string {
    const hoje = new Date();
    const upcoming = sessions
      .filter(s => s.status !== 'cancelado' && s.status !== 'concluido')
      .map(s => {
        const [d, m, y] = s.date.split('/');
        return { appt: s, dt: new Date(`${y}-${m}-${d}T${s.time}`) };
      })
      .filter(x => x.dt >= hoje)
      .sort((a, b) => a.dt.getTime() - b.dt.getTime());
    return upcoming.length > 0 ? `${upcoming[0].appt.date} ${upcoming[0].appt.time}` : '—';
  }

  sessoesAtivas(sessions: Appointment[]): number {
    return sessions.filter(s => s.status !== 'cancelado').length;
  }

  typeLabel(type: string): string {
    const map: Record<string, string> = {
      avaliacao: 'Avaliação', sessao: 'Sessão', reavaliacao: 'Reavaliação',
    };
    return map[type] ?? type;
  }

  statusLabel(status: string): string {
    const map: Record<string, string> = {
      agendado: 'Agendado', 'em-andamento': 'Em andamento', concluido: 'Concluído',
      confirmado: 'Confirmado', pendente: 'Pendente', cancelado: 'Cancelado',
    };
    return map[status] ?? status;
  }

  statusBadge(status: string): string {
    const map: Record<string, string> = {
      agendado: 'badge-blue', 'em-andamento': 'badge-yellow', concluido: 'badge-green',
      confirmado: 'badge-green', pendente: 'badge-yellow', cancelado: 'badge-red',
    };
    return map[status] ?? 'badge-gray';
  }
}
