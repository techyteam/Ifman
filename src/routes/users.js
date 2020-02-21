import express from 'express';
import UserController from '../controllers/userControllers';
import UserMiddlewares from '../middlewares/userMiddleware';
import InputValidator from '../validatation/inputValidator';
import AuthenticateUser from '../middlewares/authenticate';

const {
  signUp, signIn, signOut, updateUserInfo, forgotPassword,
} = UserController;
const { validateUser, validateLogin, validateUpdateUser } = InputValidator;
const { checkUserExists, doesUserExist, confirmUserExists } = UserMiddlewares;
const { verifyToken } = AuthenticateUser;

const userRoutes = express.Router();

userRoutes.post('/signup', validateUser, checkUserExists, signUp);
userRoutes.post('/signin', validateLogin, doesUserExist, signIn);
userRoutes.post('/logout', verifyToken, signOut);
userRoutes.patch('/forgot-password', validateLogin, doesUserExist, forgotPassword);
userRoutes.patch('/user/update-profile', verifyToken, confirmUserExists, validateUpdateUser, updateUserInfo);

export default userRoutes;
