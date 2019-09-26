/* eslint-disable prefer-destructuring */
import Utils from '../utils';
import ResponseMsg from '../utils/response';
import UserServices  from '../services/userServices';

const { resErr } = ResponseMsg;

/**
 * @class AuthenticateUser
 * @description Contains methods for user authentication
 * @exports AuthenticateUser
 */
class AuthenticateUser {
  /**
   * @method verifyToken
   * @description Verifies if token is valid
   * @param  {object} req - The user request object
   * @param  {object} res - The user res response object
   * @param  {function} next - The next() Function
   * @returns {object} req.user - The payload object
   */
  static async verifyToken(req, res, next) {
    let token = req.headers.authorization;
    if (!token) {
      return resErr(res, 400, 'No token Provided');
    }
    token = token.split(' ')[1];

    try {
      const decoded = Utils.decodeToken(token);
      const user = await UserServices.getUserByEmail(decoded.email);
      if (!user) {
        return resErr(res, 400, 'Invalid Token');
      }
      req.user = user;
      return next();
    } catch (error) {
      return resErr(res, 500, error.message);
    }
  }

  /**
   * @method verifyAdmin
   * @description verifies the user token to determine if the user is admin or not
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @param {object} next - The next Object
   * @returns {object} JSON API Response
   */
  static verifyAdmin(req, res, next) {
    if (!req.user.isAdmin) {
      return resErr(res, 403, 'Unauthorized Access');
    }
    return next();
  }
}

export default AuthenticateUser;
