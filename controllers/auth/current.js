const { users } = require('../../models/index')
const { User } = users

const current = async (req, res) => {
  const { email } = req.body

  const user = await User.findOne({ email })

  res.json({
    status: 'success',
    code: 200,
    data: {
      email: user.email,
      subscription: user.subscription
    }
  })
}

module.exports = current
