// const { BadRequest } = require('http-errors')
// const joiSchema = require('../../middlewares/validation/addContactValidation')
const contactsOperations = require('../../models/index')

const post = async (req, res, next) => {
  try {
    const result = await contactsOperations.addContact(req.body)

    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = post
