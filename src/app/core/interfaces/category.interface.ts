
export interface ICategory {
  id: number;
  name: string;
}


export interface ICategoryResponse {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: any;
}
