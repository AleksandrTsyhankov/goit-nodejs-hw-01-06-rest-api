const { Contact } = require('../../schemas/contact')

const getAll = async (_, res) => {
  const contactsAll = await Contact.find({})
  res.json({
    status: 'success',
    code: 200,
    data: {
      contactsAll
    }
  })
}

module.exports = getAll
