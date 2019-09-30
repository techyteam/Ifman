import Utils from '../utils';
import ResponseMsg from '../utils/response';

const { resError } = ResponseMsg;
/**
 * Auth middleware Class
 */
class Auth {
  /**
   * verifyToken
   * @param { Object } req
   * @param { Object } res
   * @param { Object } next
   * @returns { Object } response object with error messages or passes control to the next function
   * @description checks if the token is provided, valid or invalid
   * @memberof Auth
   */
  static async verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
      return resError(res, 401, 'No Authentication token');
    }
    try {
      const payload = Utils.decodeToken(token.split(' ')[1]);
      console.log(payload, "AM here");
      req.user = { ...payload };
      console.log(req.user);
      return next();
    } catch (error) {
      return resError(res, 401, 'the token you have provided is invalid');
    }
  }
}

export default Auth;
