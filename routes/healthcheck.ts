import express from 'express'

import HealthCheckController from '../controllers/healthCheckController'

const router = express.Router()
router.get('/', HealthCheckController.status)

export default router
