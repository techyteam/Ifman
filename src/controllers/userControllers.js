import Utils from '../utils';
import UserServices from '../services/userServices';
import ResponseMsg from '../utils/response';
import { transporter, mailOptions } from '../utils/sendmail';

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
      const { email } = req.body;
      let { password } = req.body;
      const hashedPassword = Utils.hashPassword(password);
      password = hashedPassword;
      const user = await UserServices.createUser({ email, password });
      const token = Utils.generateToken({ email });
      res.set('Authorization', `Bearer ${token}`);
      const mailHtmlContent = `
          <h2>Your account has been created succesfully</h2>
          <p>You can now login and start watching our amazing courses</p>
      `;
      const mailDetails = mailOptions(email, 'Account created successfully', mailHtmlContent);
      transporter.sendMail(mailDetails, (err, info) => {
        if (err) {
          return (err);
        }
        return (info);
      });
      return resLong(res, 201, { ...user, token });
    } catch (error) {
      return resErr(res, 500, error.message);
    }
  }


  /**
  * @method forgotPassword
  * @description reset user password
  * @param {object} req - The Request Object
  * @param {object} res - The Response Object
  * @returns {object} JSON API Response
  */
  static async forgotPassword(req, res) {
    try {
      const { email, password } = req.body;
      const hashedPassword = Utils.hashPassword(password);
      const user = await UserServices.updatePasswordByEmail(email, hashedPassword);
      return resLong(res, 200, { ...user });
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
      const user = await UserServices.getUserByEmail(email);
      const checkPassword = Utils.comparePassword(password, user.password);
      if (checkPassword) {
        const token = Utils.generateToken({ email });
        delete req.user.password;
        res.set('Authorization', `Bearer ${token}`);
        return resLong(res, 200, { user: req.user, token });
      }
      return resErr(res, 401, 'The email or password you entered is incorrect! Please check and try again.');
    } catch (error) {
      if (error.name === 'emailNull') {
        return resErr(res, 404, 'No user found for the provided email');
      }
      return resErr(res, 500, error.message);
    }
  }

  /**
 * @name updateUserInfo
 * @description Updates user profile to complete registration
 * @param {object} req The request object
 * @param {object} res The response object
 * @returns {object} The API response
 */
  static async updateUserInfo(req, res) {
    try {
      const userData = { ...req.body };
      const { user } = req;
      if (userData.password) userData.password = Utils.hashPassword(userData.password);
      const data = await UserServices.updateUserInfoById({ ...userData }, user.email);
      return resLong(res, 201, data);
    } catch (error) {
      return resErr(res, 500, error.message);
    }
  }
}
export default UserController;
