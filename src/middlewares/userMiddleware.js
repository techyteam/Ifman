import Utils from '../utils';
import UserServices from '../services/userServices';
import ResponseMsg from '../utils/response';

const { resErr } = ResponseMsg;

/**
 * User Middlewares Class
 */
export default class UserMiddlewares {
/**
 * @name checkUserExists
 * @description Checks if a user exists in the database
 * @param {object} req The request object
 * @param {object} res The response object
 * @param {object} next The response object
 * @returns {object} The API response or next()
 */
  static async checkUserExists(req, res, next) {
    try {
      const { email } = req.body;
      const data = await UserServices.getUserByEmail(email);
      if (!data) return next();
      return resErr(res, 409, 'Unsuccesful, user already exists, kindly use a different email.');
    } catch (error) {
      return resErr(res, 500, error.message);
    }
  }

  /**
   * @name doesUserExist
   * @description Checks if a user exists in the database
   * @param {object} req The request object
   * @param {object} res The response object
   * @param {object} next The response object
   * @returns {object} The API response or next()
   */
  static async doesUserExist(req, res, next) {
    try {
      const { email } = req.body;
      const data = await UserServices.getUserByEmail(email);
      if (data) {
        req.user = data.dataValues;
        return next();
      }
      return resErr(res, 404, 'Unsuccesful, User does not exist.');
    } catch (error) {
      return resErr(res, 500, error.message);
    }
  }

  /**
   * @name confirmUserExists
   * @description Checks if a user exists in the database
   * @param {object} req The request object
   * @param {object} res The response object
   * @param {object} next The response object
   * @returns {object} The API response or next()
   */
  static async confirmUserExists(req, res, next) {
    try {
      const { user } = req;
      const data = await UserServices.getUserByEmail(user.email);
      if (data) return next();
      return resErr(res, 409, 'Unsuccesful, User does not exist. Please contact Admin');
    } catch (error) {
      return resErr(res, 500, error.message);
    }
  }


  /**
   * @name userVerified
   * @description Checks if a user is verified in the database
   * @param {object} req The request object
   * @param {object} res The response object
   * @param {object} next The response object
   * @returns {object} The API response or next()
   */
  static async isUserVerified(req, res, next) {
    try {
      const decoded = Utils.decodeToken(req.query.token);
      const user = await UserServices.getUserByEmail(decoded.email);
      if (!user.isVerified) return next();
      return resErr(res, 400, 'Unsuccesful, Your account has already been Verified.');
    } catch (error) {
      return resErr(res, 500, 'Link is Invalid or expired.');
    }
  }
}
