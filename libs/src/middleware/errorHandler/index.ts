//types
import { NextFunction, Request } from 'express'
import { CustomError } from '../../customErrors'
import { CustomResponseType } from '../..'

export const errorHandler = (
  err: Error,
  req: Request,
  res: CustomResponseType,
  next: NextFunction
) => {
  console.error(`${err.constructor.name}: ${err.message}`)
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json(err.serializeErrorMsg())
  }

  res.status(500).json({
    message: err.message || 'Something went wrong',
    errors: [err.message || 'unknown error type: something went wrong'],
  })
}
