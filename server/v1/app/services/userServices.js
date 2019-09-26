import { User } from '../models';

/**
 * User service Class
 */
export default class UserServices {
  /**
   * @name CreateUser
   * @description Interacts with model to create a new user
   * @param { string } userData the user's data
   * @returns {object} return the updated field
   */
  static async createUser(userData) {
    const { dataValues } = await User.create(userData);
    delete dataValues.password; // remove sensitive data from returned object
    return dataValues;
  }

  /**
   * @name GetUserByEmail
   * @description Interacts with model to find a single user
   * @param { string } email the user's email
   * @returns {object} return the user's data
   */
  static async getUserByEmail(email) {
    const data = await User.findOne({ where: { email } });
    return data;
  }

  /**
   * @name GetUserById
   * @description Interacts with model to find a single user
   * @param { string } id the user's id
   * @returns {object} return the user's data
   */
  static async getUserById(id) {
    const userDetails = await User.findOne({ where: { id } });
    return userDetails;
  }

  /**
   * @name UpdateRememberInfo
   * @description Updates the remember info column in the user's table
   * @param { string } id the user's id
   * @param { object } rememberInfo the field to be updated with the value
   * @returns {object} return the user's data
   */
  static async UpdateRememberInfo(id, rememberInfo) {
    const data = await User.update({ rememberInfo }, { where: { id } });
    if (data[0] === 0) throw new Error('could not update user field');
  }

  /**
   * @name updateUserById
   * @description Interacts with model to find a single user
   * @param { object } attribute the user attribute to update
   * @param { string } id the user's id
   * @returns {object} return the user's data
   */
  static async updateUserById(attribute, id) {
    const { name, value } = attribute;
    const userDetails = await User.update({ [name]: value },
      { where: { id } }, { returning: true });
    return userDetails;
  }
}
