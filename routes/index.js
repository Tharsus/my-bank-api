const router = require('express').Router()

const swaggerUi = require('swagger-ui-express')
const {swaggerDocument} = require('../doc')

const AccountsRoutes = require('./accounts')
const HealthCheckRoutes = require('./healthcheck')

router.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use('/healthcheck', HealthCheckRoutes)
router.use('/accounts', AccountsRoutes)

module.exports = router
