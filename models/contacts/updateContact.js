const fs = require('fs/promises')
const path = require('path')
const readData = require('./readData')

const contactsPath = path.join(__dirname, '../../db/contacts.json')

const updateContact = async (id, data) => {
  const contacts = await readData()

  const idx = contacts.findIndex(item => String(item.id) === String(id))
  if (idx === -1) {
    return null
  }

  contacts[idx] = { ...data, id }
  const contactStr = JSON.stringify(contacts, null, 2)
  await fs.writeFile(contactsPath, contactStr)

  return contacts[idx]
}

module.exports = updateContact
