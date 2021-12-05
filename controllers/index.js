const contactsControllers = {
  getAll: require('./contacts/getAll'),
  getById: require('./contacts/getById'),
  post: require('./contacts/post'),
  remove: require('./contacts/remove'),
  update: require('./contacts/update'),
  patchFavorite: require('./contacts/patchFavorite'),
  auth: require('./auth/index'),
  updateAvatar: require('./contacts/updateAvatar'),
  verify: require('./auth/verify'),
}

module.exports = contactsControllers
