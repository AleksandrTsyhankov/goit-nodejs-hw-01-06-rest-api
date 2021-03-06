const fs = require('fs/promises')
const path = require('path')
const readData = require('./readData')

const contactsPath = path.join(__dirname, '../../db/contacts.json')

const removeContact = async (contactId) => {
  const allContacts = await readData()
  const filteredContacts = allContacts.filter(contact => String(contact.id) !== String(contactId))
  const removedContact = allContacts.filter(contact => String(contact.id) === String(contactId))

  await fs.writeFile(
    contactsPath,
    JSON.stringify(filteredContacts, null, 2),
  )
  return removedContact
}

module.exports = removeContact
