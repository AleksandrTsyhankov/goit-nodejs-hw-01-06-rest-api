const middlewares = {
  validation: require('./validation/addContactValidation'),
  controllerWrapper: require('./wrappers/controllerWrapper')
}

module.exports = middlewares
