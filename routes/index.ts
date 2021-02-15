import express from 'express'

import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../doc'

import AccountsRoutes from './accounts'
import HealthCheckRoutes from './healthcheck'

const router = express.Router()
router.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use('/healthcheck', HealthCheckRoutes)
router.use('/accounts', AccountsRoutes)

export default router
