import Joi from '@hapi/joi';

/**
 * @class Schema
 * @description Validates user input.
 * @exports Schema
 */
class Schema {
  /**
    * @method createUserSchema
    * @description Validates the user object from a post request
    * @param {object} user - The user object to be validated
    * @returns {object} An object specifying weather the input was valid or not.
    */
  static createUserSchema() {
    const schema = {
      email: Joi.string().trim().lowercase().email({ minDomainSegments: 2 })
        .required(),
      password: Joi.string().min(8).required(),
    };
    return schema;
  }

  /**
    * @method loginSchema
    * @description Validates the login details from a post request
    * @param {object} login - The login object to be validated
    * @returns {object} An object specifying weather the input was valid or not.
    */
  static loginSchema() {
    const schema = {
      email: Joi.string().trim().lowercase().email({ minDomainSegments: 2 })
        .required(),
      password: Joi.string().min(8).required(),
    };
    return schema;
  }

  /**
  * @method createCourse
  * @description Validates the course details from a post request
  * @param {object} course - The account object to be validated
  * @returns {object} An object specifying weather the input was valid or not.
  */
  static createCourse() {
    const schema = {
      courseTitle: Joi.string().trim().lowercase().required(),
      memberFees: Joi.number().min(2000).required(),
      nonMemberFees: Joi.number().min(2000).required(),
      startDate: Joi.date().format('YYYY-MM-DD').required(),
      endDate: Joi.date().format('YYYY-MM-DD').required(),
    };
    return schema;
  }
}

export default Schema;
