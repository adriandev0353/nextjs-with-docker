import express, { type Request, Response } from 'express'
import { AuthResponse } from '../custom-shared-types'

const router = express.Router()

router.post(
  '/api/users/signout',
  (req: Request, res: Response<AuthResponse>) => {
    req.session = null
    return res.send({ message: 'Signed out' })
  }
)

export { router as signOutRouter }
