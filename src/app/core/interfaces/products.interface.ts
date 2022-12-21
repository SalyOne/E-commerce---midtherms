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
export interface IProductResponse{
  name: string;
  description: string;
  price: number;
  image: string;
  category: ICategory;
  deletedAt?: Date;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}


