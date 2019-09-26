import { users } from '../models';
import Auth from '../auth/auth';
import UserServices from '../services/userServices';
import ResponseMsg from '../helpers/response';

const { resLong, resErr } = ResponseMsg;

/**
 * @class UserController
 * @description Contains methods for each user related endpoint
 * @exports UserController
 */
class UserController {
  /**
  * @method signUp
  * @description Adds a user to the database
  * @param {object} req - The Request Object
  * @param {object} res - The Response Object
  * @returns {object} JSON API Response
  */
  static async signUp(req, res) {
    try {
      const {
        email, password,
      } = req.body;
      const hashedPassword = Auth.hashPassword(password);
      const user = await UserServices.createUser({ email, hashedPassword });
      const token = Auth.generateToken({ email });
      return resLong(res, 201, { ...user, token });
    } catch (error) {
      return resErr(res, 500, error.message);
    }
  }

  /**
  * @method signIn
  * @description Logs in a user
  * @param {object} req - The Request Object
  * @param {object} res - The Response Object
  * @returns {object} JSON API Response
  */
  static async signIn(req, res) {
    try {
      const { email, password } = req.body;
      const user = await users.getSingleUser(email);
      if (Auth.verifyPassword(password, user.password)) {
        const token = Auth.generateToken({ id: user.id, isadmin: user.isadmin });
        return resLong(res, 200, { ...user, token });
      }
      return resErr(res, 401, 'The password you have entered is invalid');
    } catch (error) {
      return resErr(res, 500, error.message);
    }
  }
}
export default UserController;
