import { NotAuthorizedError } from '../../customErrors'
// types
import { Request, NextFunction } from 'express'
import { CustomResponseType } from '../../'

export const requireAuth = (
  req: Request,
  res: CustomResponseType,
  next: NextFunction
) => {
  if (!req.currentUser)
    throw new NotAuthorizedError('requires Auth', ['Not Authorized'])

  next()
}
