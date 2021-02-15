import express from 'express'

import wrapAsync from '../middlewares/wrapAsync'

import AccountController from '../controllers/accountController'

const router = express.Router()
router.post('/', wrapAsync(AccountController.create))

export default router