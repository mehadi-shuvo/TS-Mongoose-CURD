import { Request, Response } from 'express';
import { userServices } from './user.service';

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getUsersFromDB();

    res.status(200).json({
      success: true,
      message: 'users fetched successfully.',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Wrong data found',
      error: err,
    });
  }
};
const getOneUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const {
      userId: UserId,
      username,
      fullName,
      age,
      email,
      isActive,
      hobbies,
      address,
    } = await userServices.getOneUserFromDB(parseInt(userId));

    res.status(200).json({
      success: true,
      message: 'user fetched successfully.',
      data: {
        userId: UserId,
        username,
        fullName,
        age,
        email,
        isActive,
        hobbies,
        address,
      },
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.description || 'Wrong data found',
      error: err,
    });
  }
};
const createUser = async (req: Request, res: Response) => {
  try {
    const userData = await req.body;

    const result = await userServices.createUserToDB(userData);

    res.status(200).json({
      success: true,
      message: 'user created successfully.',
      data: {
        ...result.toObject(),
        password: undefined,
      },
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Wrong data found',
      error: err,
    });
  }
};

export const userControllers = {
  createUser,
  getAllUser,
  getOneUser,
};
