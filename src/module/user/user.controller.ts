import { Request, Response } from 'express';
import { userServices } from './user.service';
import userValidationSchema, { orderValidationSchema } from './user.validation';

// get all user ==============================

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

// get a user by id =====================================

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

// create an user =====================

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = await req.body;

    const validData = userValidationSchema.parse(userData);

    const result = await userServices.createUserToDB(validData);

    res.status(200).json({
      success: true,
      message: 'user created successfully.',
      data: {
        ...result.toObject(),
        password: undefined,
        orders: undefined,
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

// update a user data =======================

const updateOne = async (req: Request, res: Response) => {
  try {
    const userData = await req.body;
    const { userId } = req.params;
    const validData = userValidationSchema.parse(userData);
    const result = await userServices.updateUserOfDB(
      parseInt(userId),
      validData,
    );

    res.status(200).json({
      success: true,
      message: 'user updated successfully.',
      data: {
        ...result?.toObject(),
        password: undefined,
        orders: undefined,
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

// delete a user =================

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await userServices.deleteUserFromDB(parseInt(userId));
    if (result.deletedCount === 1) {
      res.status(200).json({
        success: true,
        message: 'user deleted successfully.',
        data: null,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Wrong data found',
      error: err,
    });
  }
};

// add product in a user's oder list

const addOder = async (req: Request, res: Response) => {
  try {
    const userData = await req.body;
    const { userId } = req.params;

    const validData = orderValidationSchema.parse(userData);

    const result = await userServices.addProductInDB(
      parseInt(userId),
      validData,
    );

    if (result.acknowledged === true) {
      res.status(200).json({
        success: true,
        message: 'order created successfully.',
        data: null,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Wrong data found',
      error: err,
    });
  }
};

//get all products of a user ===================

const getOrdersOfOneUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await userServices.getUserProductFromDB(parseInt(userId));
    res.status(200).json({
      success: true,
      message: 'oder fetched successfully',
      data: { orders: result },
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Wrong data found',
      error: err,
    });
  }
};

//get total price of a user products===================

const getTotalOfProducts = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await userServices.getTotalOfProductsPriceFromDB(
      parseInt(userId),
    );
    res.status(200).json({
      success: true,
      message: 'total price calculated successfully',
      data: { totalPrice: result },
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
  updateOne,
  deleteUser,
  addOder, //
  getOrdersOfOneUser,
  getTotalOfProducts,
};
