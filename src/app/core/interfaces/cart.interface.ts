import {IUser} from "./user.interface";

export interface ICart {
  id: number;
  total: number;
  quantity: number;
  item: any;
  user: IUser;
}

