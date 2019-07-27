import Auth from '../auth/auth';
import ResponseMsg from '../helpers/response';
import User from '../models/users';

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
      let token = req.headers.authorization
      if (!token) {
        return resErr(res, 400, 'No token Provided');
      }
      token = token.split(' ')[1];
    
      try {
        const decoded = Auth.verifyToken(token);
        const { rows } = await User.findById(decoded.user_id);
        if (!rows[0]) {
          return resErr(res, 400, 'Invalid Token');
        }
        req.body.user_id = decoded.user_id;
        req.body.is_admin = decoded.is_admin;
        return next();
      } catch (error) {
        if (error) {
          return resErr(res, 500, error.message);
        }          
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
    let token = req.headers.authorization
    if(!token){
      return resErr(res, 404, 'Token Not Found');
    }
    token = token.split(' ')[1];

    try {
      const decoded = Auth.verifyToken(token);
      req.user = decoded;
      if (!req.user.is_admin) {
        return resErr(res, 403, 'Unauthorized Access');
      }
    } catch (error) {
      if (error) {
        return resErr(res, 401, 'Authentication Failed');
      }
    }
    return next();
  }
}

export default AuthenticateUser;
