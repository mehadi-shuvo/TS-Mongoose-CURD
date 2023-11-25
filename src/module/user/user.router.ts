import express from 'express';
import { userControllers } from './user.controller';

const router = express.Router();

// APIs route ==============
router.get('/', userControllers.getAllUser);
router.get('/:userId', userControllers.getOneUser);
router.post('/', userControllers.createUser);

export const userRoutes = router;
