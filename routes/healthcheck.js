const router = require('express').Router()
const HealthCheckController = require('../controllers/healthCheckController')

router.get('/', HealthCheckController.status)

module.exports = router
