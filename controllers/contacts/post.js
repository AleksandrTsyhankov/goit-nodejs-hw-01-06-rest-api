const gravatar = require('gravatar')
const { contacts } = require('../../models/index')
const fs = require('fs/promises');
const path = require('path');

const contactsDir = path.join(__dirname, '../../public/avatars');

const post = async (req, res, next) => {
  const avatar = gravatar.url('aleksandr@mail.com')
  const newContact = { ...req.body, owner: req.user._id }
  const result = await contacts.Contact.create({ ...newContact, avatar })

  const contactsFolder = path.join(contactsDir, String(result._id));
  await fs.mkdir(contactsFolder);

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result
    }
  })
};

module.exports = post
