const express = require('express')
const router = express.Router()
const { getAll, getById, post, remove, update } = require('../../controllers/index')
const { validation, controllerWrapper } = require('../../middlewares/index')
const joiSchema = require('../../schemas/contactsSchema')

router.get('/', controllerWrapper(getAll))

router.get('/:contactId', controllerWrapper(getById))

router.post('/', validation(joiSchema), controllerWrapper(post))

router.delete('/:contactId', controllerWrapper(remove))

router.put('/:contactId', validation(joiSchema), controllerWrapper(update))

module.exports = router
