const HealthCheckService = require('../services/healthCheckService')

const HealthCheckController = {
  async status(req, res) {
    const status = await HealthCheckService.status()
    res.status(200).json(status)
  },
}

module.exports = HealthCheckController
