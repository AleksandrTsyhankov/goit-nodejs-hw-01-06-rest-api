const middlewares = {
  validation: require('./validation/addContactValidation'),
  controllerWrapper: require('./wrappers/controllerWrapper'),
  authenticate: require('./auth/authenticate')
}

module.exports = middlewares
