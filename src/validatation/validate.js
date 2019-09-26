import Joi from '@hapi/joi';

const validate = (object, schema, req, res, next) => {
  const { error, value } = Joi.validate(object, schema, { abortEarly: false });

  if (error) {
    return res.status(400).send({
      status: 'error',
      error: error.details.map(detail => detail.message),
    });
  }

  req.body = value;
  return next();
};

export default validate;
