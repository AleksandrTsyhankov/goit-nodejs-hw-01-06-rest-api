const { NotFound } = require('http-errors')
const { contacts } = require('../../models/index')

const getById = async (req, res) => {
  const { contactId } = req.params

  const result = await contacts.Contact.findById(contactId)
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }

  res.json({
    stasus: 'success',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = getById
