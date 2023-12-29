import moment from 'moment'

export function formatDate (date: Date, format: string): string {
  return moment(String(date)).format(format)
}
