import { Request, Response } from 'express';
import { userServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = await req.body;

    const result = await userServices.createStudentToDB(userData);

    res.status(200).json({
      success: true,
      message: 'user created successfully.',
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

export const userControllers = {
  createUser,
};
