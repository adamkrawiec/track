import type IUser from './user';

export default interface IItem {
  id: string,
  title: string,
  source: string,
  body?: string,
  url?: string,
  author?: IUser,
  createdAt: string,
  task?: {
    deadlineAt: Date,
    completedAt: Date,
  },
  _links: Object
}