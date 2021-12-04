const { Conflict } = require('http-errors')
// const bcrypt = require('bcryptjs')

const { users } = require('../../models/index')
const { User } = users

const register = async (req, res) => {
  const { email, password } = req.body
  const user = await users.User.findOne({ email })
  if (user) {
    throw new Conflict(`User with email=${email} already exist`)
  }

  const newUser = new User({ email })

  newUser.setPassword(password)
  await newUser.save()

  // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  // const newUser = await users.User.create({ email, password: hashPassword })

  res.status(201).json({
    Status: '201 Created',
    'Content-Type': 'application/json',
    ResponseBody: {
      user: {
        email: email,
        subscription: 'starter'
      }
    }
  })
}

module.exports = register
