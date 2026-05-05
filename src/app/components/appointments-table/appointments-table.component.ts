import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Appointment } from '../../core/models';

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

  searchTerm = '';
  filterStatus = 'all';
  filterType = 'all';
  filterDate = this.todayISO();
  openMenu: string | null = null;
  menuPosition = { top: 0, right: 0 };

  page = 0;
  readonly pageSize = 10;
  readonly Math = Math;

  get totalPages(): number { return Math.ceil(this.filtered().length / this.pageSize); }
  get paged(): Appointment[] {
    const s = this.page * this.pageSize;
    return this.filtered().slice(s, s + this.pageSize);
  }

  nextPage(): void { if (this.page < this.totalPages - 1) this.page++; }
  prevPage(): void { if (this.page > 0) this.page--; }

  private todayISO(): string { return new Date().toISOString().split('T')[0]; }

  private isoToBR(iso: string): string {
    if (!iso) return '';
    const [y, m, d] = iso.split('-');
    return `${d}/${m}/${y}`;
  }

  clearDateFilter(): void { this.filterDate = ''; this.page = 0; }
  todayFilter(): void { this.filterDate = this.todayISO(); this.page = 0; }
  onFilterChange(): void { this.page = 0; }

  filtered(): Appointment[] {
    const s = this.searchTerm.toLowerCase();
    const dateBR = this.isoToBR(this.filterDate);
    return this.appointments.filter((a) => {
      const matchSearch = a.patient.toLowerCase().includes(s) || (a.phone ?? '').includes(s);
      const matchDate   = !dateBR || a.date === dateBR;
      const matchStatus = this.filterStatus === 'all' || a.status === this.filterStatus;
      const matchType   = this.filterType   === 'all' || a.type   === this.filterType;
      return matchSearch && matchDate && matchStatus && matchType;
    });
  }

  toggleMenu(id: string, event: MouseEvent): void {
    if (this.openMenu === id) { this.openMenu = null; return; }
    const btn = event.currentTarget as HTMLElement;
    const rect = btn.getBoundingClientRect();
    this.menuPosition = { top: rect.bottom + 4, right: window.innerWidth - rect.right };
    this.openMenu = id;
  }
  closeMenu(): void { this.openMenu = null; }

  @HostListener('document:click')
  onDocumentClick(): void { this.openMenu = null; }

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
