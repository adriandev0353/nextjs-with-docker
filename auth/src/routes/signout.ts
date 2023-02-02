import express, { type Request } from 'express'

// types
import { type CustomResponseType } from '@sweez/libs'

const router = express.Router()

router.post(
  '/api/users/signout',
  (req: Request, res: CustomResponseType) => {
    req.session = null

    return res.send({ message: 'Signed out' })
  }
)

export { router as signOutRouter }
