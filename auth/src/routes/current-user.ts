import express from 'express'

// types
import { Request, NextFunction } from 'express'
import { CustomResponseType } from '@sweez/libs'

const router = express.Router()

router.get(
  '/api/users/currentuser',
  (req: Request, res: CustomResponseType, next: NextFunction) => {
    if (!req.currentUser) {
      console.log('no current user signed in')
      return res.status(200).json({ message: '' })
    }
    console.log('returning user:', req.currentUser.id, req.currentUser.email)
    return res.status(200).json({
      message: `current user id: ${req.currentUser.id}, email: ${req.currentUser.email}`,
    })
  }
)

export { router as currentUserRouter }
