import type IUser from './user';

export default interface IItem {
  id: string,
  title: string,
  source: string,
  body?: string,
  url?: string,
  author?: IUser,
  createdAt: string,
  _links: Object
}