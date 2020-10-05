import express from 'express';
import InputValidator from '../validatation/inputValidator';
import CourseController from '../controllers/coursesControllers';
import AuthenticateUser from '../middlewares/authenticate';

const { verifyAdmin, verifyToken } = AuthenticateUser;
const { validateCourse } = InputValidator;
const {
  CreateCourse, GetCourses, takeCourse, getUserCourses, ViewPaginatedCourses,
} = CourseController;

const courseRoutes = express.Router();

courseRoutes.post('/courses', verifyToken, verifyAdmin, validateCourse, CreateCourse);
courseRoutes.get('/course', GetCourses);
courseRoutes.get('/courses/pagination', ViewPaginatedCourses);
courseRoutes.get('/courses/:id', verifyToken, getUserCourses);
courseRoutes.post('/courses/:id/register', verifyToken, takeCourse);

export default courseRoutes;
