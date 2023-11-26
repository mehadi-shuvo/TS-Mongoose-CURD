import { Model } from 'mongoose';

export type TFullName = {
  firstName: string;
  lastName: string;
};

export type TOrders = {
  productName: string;
  price: number;
  quantity: number;
}[];
export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders?: TOrders;
};

export interface UserModel extends Model<TUser> {
  isUserExists(id: number): Promise<TUser | null>;
  errorWithStatus(
    message: string,
    status: number,
  ): { description: string; status: number };
}
