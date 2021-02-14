const router = require('express').Router()

const wrapAsync = require('../middlewares/wrapAsync')

const AccountController = require('../controllers/accountController')

router.post('/', wrapAsync(AccountController.create))

module.exports = router