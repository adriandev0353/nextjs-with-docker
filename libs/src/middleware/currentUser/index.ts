import jwt from 'jsonwebtoken'

// types
import { Request, NextFunction } from 'express'
import { CustomResponseType } from '../../'

declare global {
  namespace Express {
    interface Request {
      currentUser?: { id: string; email: string }
      session?: any
    }
  }
}

export const currentUser = (
  req: Request,
  res: CustomResponseType,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next()
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as {
      id: string
      email: string
    }
    req.currentUser = { id: payload.id, email: payload.email }
    console.log('@sweez/libs: middleware: req.currentUser', req.currentUser)
  } catch (error) {
    console.log('current user catch error: ' + error)
  }

  next()
}
