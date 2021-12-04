const express = require('express')
const router = express.Router()
const { getAll, getById, post, remove, update } = require('../../controllers/index')
const { validation, controllerWrapper, authenticate } = require('../../middlewares/index')
const { contacts } = require('../../models/index')

router.get('/', authenticate, controllerWrapper(getAll))

router.get('/:contactId', authenticate, controllerWrapper(getById))

router.post('/', authenticate, validation(contacts.joiSchema), controllerWrapper(post))

router.delete('/:contactId', controllerWrapper(remove))

router.put('/:contactId', authenticate, validation(contacts.joiSchema), controllerWrapper(update))

router.patch('/:contactId/favorite', authenticate, controllerWrapper(update))

module.exports = router
