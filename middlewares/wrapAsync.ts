import {NextFunction, Request, Response} from 'express'

function wrapAsync(fn:Function) {
  return (req: Request, res:Response, next: NextFunction) => {
    fn(req, res, next).catch(next)
  }
}

export default wrapAsync
