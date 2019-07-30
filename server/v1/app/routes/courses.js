import express from 'express';
import InputValidator from '../middlewares/inputValidator';
import CourseController from '../controllers/coursesControllers';
import AuthenticateUser from '../middlewares/authenticate';

const courseRoutes = express.Router();

courseRoutes.post('/courses', AuthenticateUser.verifyAdmin, InputValidator.validateCourse, CourseController.CreateCourse);

export default courseRoutes;
