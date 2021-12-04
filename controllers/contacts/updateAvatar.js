const { NotFound } = require('http-errors');
const fs = require('fs/promises');
const path = require('path');
const moment = require('moment');
const Jimp = require('jimp');

const { contacts } = require('../../models/index');
const { Contact } = contacts;
const contactsDir = path.join(__dirname, '../../public/contacts');

const updateAvatar = async (req, res) => {
  const { id } = req.params;
  const { path: tempUpload, originalname } = req.file;

  try {
    const date = moment().format('DD-MM-YYYY_hh-mm-ss');
    const fileName = `${id}_${date}_${originalname}`;
    const resultUpload = path.join(contactsDir, id, fileName);
    await fs.rename(tempUpload, resultUpload);
    const avatar = path.join('/contacts', id, fileName);


    const result = await Contact.findByIdAndUpdate(id, { avatar }, { new: true });

  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`);
    }

    const pathToCompress = path.join(contactsDir, id, fileName);

    Jimp.read(pathToCompress)
      .then(image => {
        return image.resize(250, 250).write(pathToCompress);
      }) .catch(err => {
    alert(err.message)
  }); 


    res.json({
      status: 'success',
      code: 200,
      responseBody: {
       avatarUrl: result.avatar
    }
  })
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateAvatar;
