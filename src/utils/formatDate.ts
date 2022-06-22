import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function formatDate(date: Date) {
  const dateFormatted = format(date, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  });

  const dateFormattedAndCapitalized = dateFormatted.charAt(0).toUpperCase() + dateFormatted.slice(1);

  return dateFormattedAndCapitalized;
}
