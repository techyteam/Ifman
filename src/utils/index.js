import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/**
 * @description Utils controller Class
 */
class Utils {
  /**
   * hashPassword
   * @description hashes a password
   * @param { string } password
   * @returns { string } hashed password
   */
  static hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  }

  /**
   * comparePassword
   * @description compares two passwords
   * @param { String } password
   * @param { String } hashedPassword
   * @returns { Boolean } True or false
   */
  static comparePassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
  }

  /**
   * generateToken
   * @description generates authentication token
   * @param { Object } payload - { id, email }
   * @returns { String } token
   */
  static generateToken(payload) {
    return jwt.sign(payload, process.env.SECRET, { expiresIn: '1m' });
  }

  /**
   * generateRefreshToken
   * @description generates authentication token
   * @param { Object } payload - { id, email }
   * @returns { String } token
   */
  static generateRefreshToken(payload) {
    return jwt.sign(payload, process.env.RSH_SECRET);
  }

  /**
   * decodeToken
   * @description decodes the token and returns the corresponding payload
   * @param { String } token
   * @returns { Object } payload - { id, email, isAdmin }
   * @memberof Utils
   */
  static decodeToken(token) {
    return jwt.verify(token, process.env.SECRET);
  }

  /**
   * decodeRefreshToken
   * @description decodes the token and returns the corresponding payload
   * @param { String } token
   * @returns { Object } payload - { id, email, isAdmin }
   * @memberof Utils
   */
  static decodeRefreshToken(token) {
    return jwt.verify(token, process.env.RSH_SECRET);
  }
}
export default Utils;
