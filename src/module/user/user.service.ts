import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentToDB = async (userData: TUser) => {
  const user = new User(userData);

  const result = await user.save();

  return result;
};

export const userServices = {
  createStudentToDB,
};
