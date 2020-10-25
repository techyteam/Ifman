import EventsServices from '../services/eventsservices';
import ResponseMsg from '../utils/response';

const { resLong, resErr } = ResponseMsg;

/**
* @class CourseController
* @description Contains methods for each user related endpoint
* @exports EventsController
*/
class EventsController {
  /**
    * @method ViewPaginatedCourses
    * @description Fetches all courses from the database
    * @param {object} req - The Request Object
    * @param {object} res - The Response Object
    * @returns {object} JSON API Response
    */
  static async ViewPaginatedEvents(req, res) {
    try {
      const pageResult = await EventsServices.Pagination(req, res);
      return resLong(res, 200, pageResult);
    } catch (error) {
      return resErr(res, 500, error.message);
    }
  }
}
export default EventsController;
