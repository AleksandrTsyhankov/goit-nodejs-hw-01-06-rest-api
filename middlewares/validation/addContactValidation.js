// const Joi = require('joi')
const { BadRequest } = require('http-errors')

const validaton = (schema) => {
  const validationMiddleware = (req, res, next) => {
    const { error } = schema.validate(req.body)
    if (error) {
      const newError = BadRequest(error.message)
      next(newError)
    }
    next()
  }

  return validationMiddleware
}

module.exports = validaton
