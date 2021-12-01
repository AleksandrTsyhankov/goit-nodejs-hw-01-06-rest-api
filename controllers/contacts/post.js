const { contacts } = require('../../models/index')

const post = async (req, res, next) => {
  const newContact = { ...req.body, owner: req.user._id }
  const result = await contacts.Contact.create(newContact)

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result
    }
  })
}

module.exports = post
