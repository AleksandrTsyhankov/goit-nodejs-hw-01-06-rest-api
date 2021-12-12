const { BadRequest } = require('http-errors')

const { sendMail } = require('../../helpers/index');
const { users } = require('../../models/index');

const { User } = users;

const reVerify = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new BadRequest(`Wrong email: ${email}`);
  };

  const user = await User.findOne({ email });
  if (user.verify) {
    throw new BadRequest('Verification has already been passed');
  };

  const verificationToken = user.verificationToken;

  const mail = {
    to: 'tsygankov1986@gmail.com',
    subject: 'Подтверждение регистрации',
    html: `<a href="http://localhost:3000/api/auth/verify/${verificationToken}">Нажмите для подтверждения email</a>`
  };
  await sendMail(mail);

  res.status(201).json({
    Status: '200 Ok',
    code: 200,
    'Content-Type': 'application/json',
    ResponseBody: {
      message: 'Verification email sent'
    }
  });
};

module.exports = reVerify;
