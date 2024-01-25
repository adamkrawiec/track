import type IItem from './item';
import type IUser from './user';

export default interface ITask {
  id: string,
  deadlineAt: Date,
  completedAt: Date,
  overdue: boolean,
  item: IItem,
  user: IUser,
  _links: {
    complete: string
  }
}