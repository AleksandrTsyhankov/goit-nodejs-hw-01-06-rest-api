const { NotFound } = require('http-errors')
const { contacts } = require('../../models/index')

const update = async (req, res) => {
  const { contactId } = req.params
  const result = await contacts.Contact.findByIdAndUpdate(contactId, req.body, { new: true })

  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = update
