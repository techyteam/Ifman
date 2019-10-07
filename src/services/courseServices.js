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
  static async getAUserCourseBy(courseId) {
    const CourseDetails = await userCourses.findOne({ where: { courseId } });
    return CourseDetails;
  }
}
