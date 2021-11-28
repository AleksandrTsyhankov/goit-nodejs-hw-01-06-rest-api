const contactsOperations = require('../../models/index')

const getAll = async (_, res) => {
  const contactsAll = await contactsOperations.listContacts()
  res.json({
    status: 'success',
    code: 200,
    data: {
      contactsAll
    }
  })
}

module.exports = getAll
