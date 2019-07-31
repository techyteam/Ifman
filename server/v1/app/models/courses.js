import db from '../database/db';
import moment from 'moment';

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
}
export default Course;
  