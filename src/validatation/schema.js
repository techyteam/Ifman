/* eslint-disable no-param-reassign */
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
      duration: Joi.string().trim().lowercase().required(),
      venue: Joi.string().trim().lowercase().required(),
      startDate: Joi.date().required(),
      endDate: Joi.date().required(),
    };
    return schema;
  }

  /**
    * @method userProfileSchema
    * @description Validates the user object from a post request
    * @param {object} user - The user object to be validated
    * @returns {object} An object specifying weather the input was valid or not.
    */
  static userProfileSchema() {
    const schema = {
      firstName: Joi.string().lowercase().trim().required()
        .regex(/^[a-zA-Z]+$/)
        .error((errors) => {
          errors.forEach((err) => {
            switch (err.type) {
              case 'string.regex.base':
                err.message = 'first_name can only contain letters';
                break;
              default:
                break;
            }
          });
          return errors;
        }),
      middleName: Joi.string().lowercase().trim().required()
        .regex(/^[a-zA-Z]+$/)
        .error((errors) => {
          errors.forEach((err) => {
            switch (err.type) {
              case 'string.regex.base':
                err.message = 'last_name can only contain letters';
                break;
              default:
                break;
            }
          });
          return errors;
        }),
      lastName: Joi.string().lowercase().trim().required()
        .regex(/^[a-zA-Z]+$/)
        .error((errors) => {
          errors.forEach((err) => {
            switch (err.type) {
              case 'string.regex.base':
                err.message = 'last_name can only contain letters';
                break;
              default:
                break;
            }
          });
          return errors;
        }),
      birthDate: Joi.date().required(),
      gender: Joi.string().trim().lowercase().valid('male', 'female')
        .required(),
      phoneNumber: Joi.string(),
    };
    return schema;
  }
}

export default Schema;
