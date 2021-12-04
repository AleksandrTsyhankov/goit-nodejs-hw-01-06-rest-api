const { contacts } = require('../../models/index')

const getAll = async (req, res) => {
  const { page, limit } = req.query
  const skip = (page - 1) * limit >= 0 ? (page - 1) * limit : 0
  const { _id } = req.user

  const contactsAll = await contacts.Contact.find({ owner: _id },
    '_id, name email owner',
    { skip, limit: +limit }).populate('owner', '_id email')
  res.json({
    status: 'success',
    code: 200,
    data: {
      contactsAll
    }
  })
}

module.exports = getAll
