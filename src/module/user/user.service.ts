import { TUser } from './user.interface';
import { User } from './user.model';

const getUsersFromDB = async () => {
  const result = await User.find(
    {},
    { username: 1, fullName: 1, age: 1, email: 1, address: 1, _id: 0 },
  );

  return result;
};
const createUserToDB = async (userData: TUser) => {
  const user = new User(userData);

  const result = await user.save();

  return result;
};

export const userServices = {
  createUserToDB,
  getUsersFromDB,
};
