import type IUser from './user';

export default interface IItem {
  id: string,
  title: string,
  source: string | undefined,
  body?: string,
  url?: string,
  author?: IUser,
  createdAt: string,
  task?: {
    id: string,
    deadlineAt: Date,
    completedAt: Date,
    overdue: boolean,
    _links: {
      complete: string
    }
  },
  _links: Object
}