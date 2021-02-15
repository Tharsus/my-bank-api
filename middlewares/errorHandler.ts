import { Request, Response, NextFunction } from "express"

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  const status = 404

  res.status(status).json({
    message: err.message,
  })

  return next()
}

export default errorHandler
