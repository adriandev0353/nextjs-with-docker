import { validationResult } from 'express-validator'
import { RequestValidationError } from '../../customErrors'

// types
import { NextFunction, Request } from 'express'
import { CustomResponseType } from '../../'

export const validateRequest = (
  req: Request,
  res: CustomResponseType,
  next: NextFunction
) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw new RequestValidationError(
      'User Credentials validation error:',
      errors.array()
    )
  }

  next()
}
