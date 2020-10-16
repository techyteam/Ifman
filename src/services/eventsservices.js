import { Op } from 'sequelize';
import { events } from '../models';

const Events = events;

/**
 * Course service Class
 */
export default class EventsServices {
/**
   * @name Pagination
   * @description Interacts with model to find a single Users Course
   * @param { string } id the user id
   * @returns {object} return the userCourses data
   */
  static async Pagination(req) {
    const page = parseInt(req.query.page || 1, 10);
    const nameSearch = req.query.title;
    const limit = 6;

    const offset = (page > 1) ? (page - 1) * limit : 0;
    const filters = { limit, offset };
    if (nameSearch) {
      filters.where = {
        Title: {
          [Op.iLike]: `%${nameSearch}%`,
        },
      };
    }

    return Events.findAndCountAll(filters)
      .then((data) => {
        const totalPages = Math.ceil(data.count / limit);
        const response = {
          message: `Paginating is completed! Query parameters: page = ${page}, limit = ${limit}`,
          data: {
            totalItems: data.count,
            totalPages,
            limit,
            currentPageNumber: page + 1,
            previousPageNumber: page - 1,
            currentPageSize: data.rows.length,
            events: data.rows,
          },
        };
        return response;
      });
  }
}
