import users from '../models/users';
import Auth from '../auth/auth';
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
        firstName, lastName, email, password, phoneNumber,
      } = req.body;      
      const hashedPassword = Auth.hashPassword(password);
      const user = await users.createUser(firstName, lastName, email, hashedPassword, phoneNumber);      
      const { id, isadmin } = user;
      const token = Auth.generateToken({ id, isadmin });            
      return resLong(res, 201, { ...user, token });
    } catch (error) {
      if (error.constraint === 'users_email_key') {
        return resErr(res, 409, 'Kindly use another email, this email address has already been used');
      }
      if (error.constraint === 'users_phonenumber_key') {
        return resErr(res, 409, 'Kindly use another phone number, this phone number has already been used');
      }
      
      return resErr(res, 500, "server error")
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
    return resErr(res, 401, 'The password you have entered is invalid')
  } catch (error) {
    if (error.name === 'emailNull') {
      return resErr(res, 404, 'no user found found for the provided email');
    }    
    return resErr(res, 500, "server error")
  }
}

}
export default UserController;
