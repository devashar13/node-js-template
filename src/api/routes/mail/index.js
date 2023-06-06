const { Router } = require('express')
const mailController = require('../../controllers/mail')

const router = Router()

router.post('/', mailController.writeMailController)

module.exports = router
