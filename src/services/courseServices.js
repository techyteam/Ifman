import { names } from 'debug';
import { Op } from 'sequelize';
import { course, userCourses } from '../models';

const Course = course;

/**
 * Course service Class
 */
export default class CourseServices {
  /**
   * @name CreateCourse
   * @description Interacts with model to create a new Course
   * @param { string } CourseData the Course's data
   * @returns {object} return the updated field
   */
  static async createCourse(CourseData) {
    const { dataValues } = await Course.create(CourseData);
    return dataValues;
  }

  /**
   * @name GetCourseById
   * @description Interacts with model to find a single Course
   * @param { string } id the Course's id
   * @returns {object} return the Course's data
   */
  static async getCourseById(id) {
    const CourseDetails = await Course.findOne({ where: { id } });
    return CourseDetails;
  }

  /**
   * @name GetAllCourse
   * @description Interacts with model to find a single Course
   * @param { string } id the Course's id
   * @returns {object} return the Course's data
   */
  static async getAllCourse() {
    const CourseDetails = await Course.findAll();
    return CourseDetails;
  }

  /**
   * @name updateCourseById
   * @description Interacts with model to find a single Course
   * @param { object } attribute the Course attribute to update
   * @param { string } id the Course's id
   * @returns {object} return the Course's data
   */
  static async updateCourseById(attribute, id) {
    const { name, value } = attribute;
    const CourseDetails = await Course.update({ [name]: value },
      { where: { id } }, { returning: true });
    return CourseDetails;
  }

  /**
   * @name GetCourseByUserId
   * @description Interacts with model to find a single Users Course
   * @param { string } id the user id
   * @returns {object} return the userCourses data
   */
  static async getCourseByUserId(userId) {
    const CourseDetails = await userCourses.findOne({ where: { userId } });
    return CourseDetails;
  }

  /**
   * @name TakeCourse
   * @description Interacts with model to create a new  user Course
   * @param { string } CourseData the Course's data
   * @returns {object} return the updated field
   */
  static async takeCourse(CourseData) {
    const { dataValues } = await userCourses.create(CourseData);
    return dataValues;
  }

  /**
   * @name GetCourseByUserId
   * @description Interacts with model to find a single Users Course
   * @param { string } id the user id
   * @returns {object} return the userCourses data
   */
  static async getAUserCourseBy(courseId, UserId) {
    const CourseDetails = await userCourses.findOne({ where: { courseId, UserId } });
    return CourseDetails;
  }

  /**
   * @name Pagination
   * @description Interacts with model to find a single Users Course
   * @param { string } id the user id
   * @returns {object} return the userCourses data
   */
  static async Pagination(req) {
    const page = parseInt(req.query.page || 1, 10);
    const nameSearch = req.query.title;
    console.log({nameSearch});
    const limit = 6;

    const offset = (page > 1) ? (page - 1) * limit : 0;
    const filters = { limit, offset };
    if (nameSearch) {
      filters.where = {
        courseTitle: {
          [Op.iLike]: `%${nameSearch}%`,
        },
      };
    }

    return Course.findAndCountAll(filters)
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
            courses: data.rows,
          },
        };

        return response;
      });
  }
}
