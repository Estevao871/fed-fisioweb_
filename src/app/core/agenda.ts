/**
 * Grade de horários da clínica: segunda a sexta, das 8h às 20h, de 30 em 30 minutos
 * (último início às 19:30). Precisa bater com o back (AgendaUtil + /agendamentos/disponibilidade),
 * que só reconhece conflitos em horários exatos dessa grade.
 */
export const HORARIOS_ATENDIMENTO: readonly string[] = Array.from({ length: 24 }, (_, i) => {
  const h = 8 + Math.floor(i / 2);
  const m = i % 2 === 0 ? '00' : '30';
  return `${String(h).padStart(2, '0')}:${m}`;
});
