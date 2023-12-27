import type IUser from './user';

export default interface IItem {
  id: Number,
  title: String,
  body?: String,
  url?: String,
  author?: IUser,
  _links: Object
}