const { NotFound } = require('http-errors')
const { Contact } = require('../../schemas/contact')

const getById = async (req, res) => {
  const { contactId } = req.params

  const result = await Contact.findById(contactId)
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
