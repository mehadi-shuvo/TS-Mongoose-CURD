import { error } from 'console';
import { TUser } from './user.interface';
import { User } from './user.model';
import { Error } from 'mongoose';

const getUsersFromDB = async () => {
  const result = await User.find(
    {},
    { username: 1, fullName: 1, age: 1, email: 1, address: 1, _id: 0 },
  );

  return result;
};
const getOneUserFromDB = async (id: number) => {
  const userChecker = await User.isUserExists(id);
  if (userChecker) {
    return userChecker as TUser;
  } else {
    throw User.errorWithStatus('user not found', 500);
  }
};
const createUserToDB = async (userData: TUser) => {
  const user = new User(userData);

  const result = await user.save();

  return result;
};

export const userServices = {
  createUserToDB,
  getUsersFromDB,
  getOneUserFromDB,
};
