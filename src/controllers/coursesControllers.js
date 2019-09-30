import CourseServices from '../services/courseServices';
import ResponseMsg from '../utils/response';

const { resLong, resErr } = ResponseMsg;

/**
 * @class CourseController
 * @description Contains methods for each user related endpoint
 * @exports CourseController
 */
class CourseController {
  /**
    * @method CreateCourse
    * @description Adds a course to the database
    * @param {object} req - The Request Object
    * @param {object} res - The Response Object
    * @returns {object} JSON API Response
    */
  static async CreateCourse(req, res) {
    try {
      const newCourse = await CourseServices.createCourse(req.body);
      return resLong(res, 201, newCourse);
    } catch (error) {
      return resErr(res, 500, error.message);
    }
  }

  /**
    * @method GetCourses
    * @description Fetches all courses from the database
    * @param {object} req - The Request Object
    * @param {object} res - The Response Object
    * @returns {object} JSON API Response
    */
  static async GetCourses(req, res) {
    try {
      const result = await CourseServices.getAllCourse();
      return resLong(res, 200, result);
    } catch (error) {
      return resErr(res, 400, error.message);
    }
  }

  /**
    * @method takeCourse
    * @description Adds a users course details to the database
    * @param {object} req - The Request Object
    * @param {object} res - The Response Object
    * @returns {object} JSON API Response
    */
  static async takeCourse(req, res) {
    const { body, params: { id } } = req;
    try {
      const userCourse = await CourseServices.getCourseById(id);

      if (userCourse) {
        return resErr(res, 400, 'You can\'t register for the same course twice');
      }
      const newCourse = await CourseServices.updateUserById({ id, user: body.id });
      const course = await CourseServices.getCourse(newCourse.userid, newCourse.courseid);
      return resLong(res, 201, { ...course });
    } catch (error) {
      return resErr(res, 400, error.message);
    }
  }
}
export default CourseController;
