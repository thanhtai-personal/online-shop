const User = require('../models/user')

User.getByUserName = async (username, getPassword) => {
  const user = await User.findOne({
    raw: true,
    attributes: {
      exclude: getPassword ? [] : ['password']
    },
    raw: true,
    nest: true,
    where: {
      username: username,
      isActive: true
    },
  })
  return user
}

module.exports = User