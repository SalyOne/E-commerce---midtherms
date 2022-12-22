import {ICategory} from "./category.interface";

export interface IProduct  {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: ICategory;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}


