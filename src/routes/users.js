import express from 'express';
import UserController from '../controllers/userControllers';
import UserMiddlewares from '../middlewares/userMiddleware';
import InputValidator from '../validatation/inputValidator';
// import Auth from '../middlewares/auth';

const { signUp, signIn } = UserController;
const { validateUser, validateLogin } = InputValidator;
const { checkUserExists, doesUserExist } = UserMiddlewares;
// const { verifyToken } = Auth;

const userRoutes = express.Router();

userRoutes.post('/signup', validateUser, checkUserExists, signUp);
userRoutes.post('/signin', validateLogin, doesUserExist, signIn);

export default userRoutes;
