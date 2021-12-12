const { Conflict } = require('http-errors')
// const bcrypt = require('bcryptjs')
const { nanoid } = require('nanoid');
const { sendMail } = require('../../helpers/index');
const { users } = require('../../models/index');

const { User } = users;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with email=${email} already exist`);
  }

  const verificationToken = nanoid();
  const newUser = new User({ email, verificationToken });

  newUser.setPassword(password);
  await newUser.save();

  // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  // const newUser = await users.User.create({ email, password: hashPassword })

  const mail = {
    to: 'tsygankov1986@gmail.com',
    subject: 'Подтверждение регистрации',
    html: `<a href="http://localhost:3000/api/auth/verify/${verificationToken}">Нажмите для подтверждения email</a>`
  }
  await sendMail(mail);

  res.status(201).json({
    Status: '201 Created',
    'Content-Type': 'application/json',
    ResponseBody: {
      user: {
        email: email,
        subscription: 'starter'
      }
    }
  });
};

module.exports = register;
