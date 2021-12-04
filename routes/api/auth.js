const express = require('express')
const { validation, controllerWrapper, authenticate } = require('../../middlewares/index')
const { auth: ctrl } = require('../../controllers/index')
const { users } = require('../../models/index')

const router = express.Router()

router.post('/register', validation(users.joiSchema), controllerWrapper(ctrl.register)) // signup
router.post('/login', validation(users.joiSchema), controllerWrapper(ctrl.login)) // signin
router.get('/logout', authenticate, controllerWrapper(ctrl.logout)) // signout
router.get('/current', authenticate, controllerWrapper(ctrl.current))

module.exports = router
