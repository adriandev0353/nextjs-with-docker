import express from 'express'
// types
import { Request, NextFunction } from 'express'
import { CustomResponseType } from '@sweez/libs'

const router = express.Router()

router.post(
  '/api/users/signout',
  (req: Request, res: CustomResponseType, next: NextFunction) => {
    req.session = null

    return res.send({ message: 'Signed out' })
  }
)

export { router as signOutRouter }
