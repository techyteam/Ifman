import express from 'express';
import UserController from '../controllers/userControllers';
import InputValidator from '../middlewares/inputValidator';

const userRoutes = express.Router();

userRoutes.post('/signup', InputValidator.validateUser, UserController.signUp);
userRoutes.post('/signin', InputValidator.validateLogin, UserController.signIn);

export default userRoutes;
