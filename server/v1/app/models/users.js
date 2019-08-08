import Auth from '../auth/auth';
import db from '../database/db';

/**
 * @exports User
 * @class User
 */
class User {
  /**
   * @static createUser
   * @description creates a new user entry in the database
   * @param { String } firstName
   * @param { String } lastName
   * @param { String } email
   * @param { String } hashedPassword
   * @param { String } phoneNumber
   * @returns { Object } the created user details
   * @memberof User
   */
  static async createUser(firstName, lastName, email, hashedPassword, phoneNumber) {
    try {
      const queryText = `INSERT INTO users (firstName, lastName, email, password, phoneNumber)
      VALUES ($1, $2, $3, $4, $5) RETURNING id, firstName, lastName, email, phoneNumber, isAdmin;`;    
      const values = [firstName, lastName, email, hashedPassword, phoneNumber];
      const { rows } = await db.query(queryText, values);
      return rows[0];
    } catch (error) {
      throw error
    }
  }

    /**
   * @static signin
   * @description returns a single user where user id matches
   * @param { String } userId
   * @returns { Object } the users user details
   * @memberof User
   */
  static async getSingleUser(email) {
    try {
      const queryText = `SELECT * FROM users WHERE email = $1;`;
      const { rows } = await db.query(queryText, [email]);
      if (!rows[0]) {
        const error = new Error();
        error.name = 'emailNull';
        throw error;
      }
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
}

export default User;