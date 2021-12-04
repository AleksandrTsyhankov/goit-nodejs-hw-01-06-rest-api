const middlewares = {
  validation: require('./validation/addContactValidation'),
  controllerWrapper: require('./wrappers/controllerWrapper'),
  authenticate: require('./auth/authenticate'),
  upload: require('./upload/upload')
}

module.exports = middlewares
