const { BadRequest } = require('http-errors')
const jwt = require('jsonwebtoken')
const { users } = require('../../models/index')
const { User } = users
const { SECRET_KEY } = process.env

const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user || !user.verify || !user.comparePassword(password)) {
    throw new BadRequest('Wrond email or password')
  }

  const payload = {
    id: user._id
  }

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1000h' })

  await User.findByIdAndUpdate(user._id, { token })
  res.json({
    status: 'success',
    code: 200,
    data: {
      token
    }
  })
  // if (!user) {
  //   throw new NotFound(`User with email=${email} not found`)
  // }

  // const compareResult = bcrypt.compareSync(password, user.password)

  // if (!compareResult) {
  //   throw new Unauthorized('Password wrong')
  // }
}

module.exports = login
