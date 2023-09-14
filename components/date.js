import { parseISO, format } from 'date-fns'; // library for formatting date

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
