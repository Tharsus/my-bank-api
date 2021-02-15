import HealthCheckService from '../services/healthCheckService'
import {Request, Response} from 'express'

export default {
  async status(req: Request, res: Response) {
    const status = await HealthCheckService.status()
    res.status(200).json(status)
  },
}
