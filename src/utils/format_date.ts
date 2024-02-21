import moment from 'moment'

export function formatDate (date: Date, format: string): string {
  return moment(String(date)).format(format)
}

export const SHORT_DATE_FORMAT = 'DD/MM/YYYY'