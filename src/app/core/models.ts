export type UserType = 'fisioterapeuta' | 'recepcionista' | 'paciente';

export interface Appointment {
  id: string;
  patient: string;
  phone?: string;
  date: string;
  time: string;
  type: 'avaliacao' | 'sessao' | 'reavaliacao';
  status: 'agendado' | 'em-andamento' | 'concluido' | 'confirmado' | 'pendente' | 'cancelado';
  duration?: number;
  fisioterapeuta?: string;
  fisioterapeutaId?: string;
  pacienteId?: string;
  serieId?: string;
}

export interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  source: 'website' | 'phone' | 'referral';
  date: string;
  status: 'pending' | 'contacted' | 'scheduled';
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  condition: string;
  sessionsCompleted: number;
  totalSessions: number;
  progress: number;
  nextAppointment: string;
  fisioterapeuta?: string;
}

export interface SessionHistory {
  id: string;
  session: number;
  date: string;
  status: 'concluida' | 'agendada';
  complaint: string;
  notes: string;
  exercises: string[];
  pain?: number;
  mobility?: number;
}

export interface ProgressNote {
  id: string;
  date: string;
  session: number;
  notes: string;
  exercises: string[];
  pain?: number;
  mobility?: number;
}

export type UserRole = 'admin' | 'fisioterapeuta' | 'recepcionista' | 'paciente';

export interface UserRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;       // perfil principal (roles[0])
  roles: UserRole[];
  status: 'ativo' | 'inativo';
  createdAt: string;
}
