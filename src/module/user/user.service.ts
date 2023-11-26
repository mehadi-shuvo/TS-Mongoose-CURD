import { TOrders, TUser } from './user.interface';
import { User } from './user.model';

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

const updateUserOfDB = async (id: number, data: TUser) => {
  const userChecker = await User.isUserExists(id);
  if (userChecker) {
    const result = await User.updateOne({ userId: id }, data);
    if (result.modifiedCount === 1) {
      return await User.findOne({ userId: id });
    }
  } else {
    throw User.errorWithStatus('user not found', 404);
  }
};
const deleteUserFromDB = async (id: number) => {
  const userChecker = await User.isUserExists(id);
  if (userChecker) {
    const result = await User.deleteOne({ userId: id });
    return result;
  } else {
    throw User.errorWithStatus('user not found', 500);
  }
};

const addProductInDB = async (id: number, product: any) => {
  const user = await User.isUserExists(id);
  if (user) {
    const result = await User.updateOne(
      { userId: id },
      { $push: { orders: product } },
    );

    return result;
  } else {
    throw User.errorWithStatus('user not found', 500);
  }
};
const getUserProductFromDB = async (id: number) => {
  const user = await User.isUserExists(id);
  if (user) {
    const result = user?.orders;
    return result;
  } else {
    throw User.errorWithStatus('user not found', 500);
  }
};
const getTotalOfProductsPriceFromDB = async (id: number) => {
  const user = await User.isUserExists(id);
  if (user) {
    let sum = 0;
    const result = user?.orders?.map(
      (pro) => (sum += pro.price * pro.quantity),
    );
    return sum;
  } else {
    throw User.errorWithStatus('user not found', 500);
  }
};

export const userServices = {
  createUserToDB,
  getUsersFromDB,
  getOneUserFromDB,
  updateUserOfDB,
  deleteUserFromDB,
  addProductInDB,
  getUserProductFromDB,
  getTotalOfProductsPriceFromDB,
};
