import moment from 'moment';
import db from '../database/db';

/**
 * @exports Course
 * @class Course
 */
class Course {
  /**
     * @param {*} data
     * @returns { object } course object
     */
  static create(data) {
    const queryText = `INSERT INTO courses (courseTitle, memberFees, nonmemberFee, startDate, endDate)
       VALUES ($1, $2, $3, $4, $5) RETURNING id, courseTitle, memberFees, nonmemberFee, startDate, endDate;`;

    const {
      courseTitle, memberFees, nonmemberFee,
    } = data;

    const values = [courseTitle, memberFees, nonmemberFee, moment(new Date()), moment(new Date())];
    const response = db.query(queryText, values);
    return response;
  }

  /**
   * @method getCourses
   * @returns {object} All courses
   */
  static async getCourses() {
    const queryText = 'SELECT * from courses;';
    const result = db.query(queryText);
    return result;
  }

  /**
   * @param {*} data
   * @returns { object } user object
   */
  static addCourse(data) {
    const queryText = `INSERT INTO userCourses (registeredOn, userId ,courseId)
      VALUES ($1, $2, $3) RETURNING registeredOn, userId ,courseId;`;

    const date = moment(new Date());
    const {
      id,
      user,
    } = data;

    const values = [date, user, id];
    const response = db.query(queryText, values);
    return response;
  }

  // /**
  //  * @method regCourse
  //  * @returns {object} registered courses
  //  */
  // static async regCourse() {
  //   const queryText = `SELECT * FROM userCourses
  //     JOIN courses ON userCourses.courseId = courses.id
  //     WHERE id = $1;`;
  //   const result = await db.query(queryText);
  //   return result;
  // }
  /**
   * @method getCourse
   * @returns {object} A specific course
   */
  static async getCourse(userId, courseId) {
    const queryText = `SELECT userCourses.courseId, courses.courseTitle,
    courses.startDate, courses.endDate, users.email, userCourses.userId from userCourses
    JOIN courses ON userCourses.courseId = courses.id
    JOIN users ON userid = users.id
    WHERE users.id = $1 AND courses.id = $2;`;
    const result = db.query(queryText, [userId, courseId]);
    return result;
  }
}
export default Course;
