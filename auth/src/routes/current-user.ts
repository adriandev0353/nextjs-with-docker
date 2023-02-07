import express, { type Request } from 'express'
import { log, type CustomResponseType } from '@sweez/libs'

const router = express.Router()

router.get(
  '/api/users/currentuser',
  (req: Request, res: CustomResponseType) => {
    if (req.currentUser == null) {
      log('no current user signed in')
      return res.status(200).json({ message: '' })
    }

    const myOBJ = { one: 1, two: 2, three: 3, four: 4, five: 5 }
    const myObj2 = { ...myOBJ }

    log('current user:', req.currentUser, myOBJ, myObj2)

    log('returning user:', req.currentUser.id, req.currentUser.email)

    return res.status(200).json({
      message: `current user id: ${req.currentUser.id}, email: ${req.currentUser.email}`,
    })
  }
)

export { router as currentUserRouter }
