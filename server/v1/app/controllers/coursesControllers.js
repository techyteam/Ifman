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
     
}
export default CourseController;