import express from 'express';
import InputValidator from '../validatation/inputValidator';
import CourseController from '../controllers/coursesControllers';
import AuthenticateUser from '../middlewares/authenticate';

const { verifyAdmin, verifyToken } = AuthenticateUser;
const { validateCourse } = InputValidator;
const { CreateCourse, GetCourses, takeCourse } = CourseController;

const courseRoutes = express.Router();

courseRoutes.post('/courses', verifyToken, verifyAdmin, validateCourse, CreateCourse);
courseRoutes.get('/courses', GetCourses);
courseRoutes.post('/courses/:id/register', verifyToken, takeCourse);

export default courseRoutes;
