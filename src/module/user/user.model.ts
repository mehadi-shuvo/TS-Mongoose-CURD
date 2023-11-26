import { Schema, model } from 'mongoose';
import { TFullName, TOrders, TUser, UserModel } from './user.interface';

const fullNameSchema = new Schema<TFullName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const userSchema = new Schema<TUser, UserModel>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: fullNameSchema, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  orders: {
    type: [
      {
        productName: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    default: [],
  },
});

// custom static methods====================
userSchema.statics.isUserExists = async function (id: number) {
  const existingUser: TUser | null = await User.findOne({ userId: id });
  return existingUser;
};

userSchema.statics.errorWithStatus = function (
  message: string,
  status: number,
) {
  return { description: message, status };
};

// model of a user data=====================
export const User = model<TUser, UserModel>('users', userSchema);
