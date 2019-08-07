import Course from '../models/courses';
import ResponseMsg from '../helpers/response';

const { resLong, resErr, resShort } = ResponseMsg;

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
        const { rows } = await Course.create(req.body);
        const {
          id, coursetitle, memberfees, nonmemberfee, startdate, enddate
        } = rows[0]
        return resLong(res, 201, {
            id, coursetitle, memberfees, nonmemberfee, startdate, enddate
            });
      } catch (error) {
          if (error) 
          return resErr(res, 400, error.message);
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
      try{
        const result = await Course.getCourses();
        return resLong(res, 200, result.rows);
      } catch (error) {
        if (error) 
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
   static async takeCouse(req, res) {
     const { body, params: { id } } = req;
    try{
      const existingCourse = await Course.getCourse(body.id, id); 

      if (existingCourse.rowCount > 0) return resErr(res, 400, 'You can\'t register for the same course twice');
      const { rows } = await Course.addCourse({ id, user: body.id });

      const course = await Course.getCourse(rows[0].userid, rows[0].courseid);
      return resLong(res, 201, {
        ...course.rows[0],
        });
    } catch (error) {
      if (error) 
      return resErr(res, 400, error.message);
    }
  }
}
export default CourseController;