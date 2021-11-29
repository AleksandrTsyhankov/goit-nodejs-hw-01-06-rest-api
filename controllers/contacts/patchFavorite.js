const { NotFound } = require('http-errors')
const { Contact } = require('../../schemas/contact')

const patchFavorite = async (req, res) => {
  const { contactId } = req.params
  const { favorive } = req.body
  const result = await Contact.findByIdAndUpdate(contactId, { favorive }, { new: true })

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

module.exports = patchFavorite
