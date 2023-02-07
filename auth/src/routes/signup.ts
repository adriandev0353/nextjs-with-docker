import express, { type Request } from 'express'
import { body } from 'express-validator'
import {
  DataBaseConnectionError,
  GeneralError,
  validateRequest,
  type CustomResponseType,
} from '@sweez/libs'
import { createSession } from '../libs/createSession'
import { User } from '../models/users'

const router = express.Router()

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be at least 4 with max of 20 characters'),
  ],
  validateRequest,
  async (req: Request, res: CustomResponseType) => {
    const { email, password } = req.body
    let newUser

    try {
      const isAlreadyUser = await User.findOne({ email })

      if (isAlreadyUser != null) {
        throw new GeneralError(422, email, ['Already Exist'])
      }

      newUser = User.build({ email, password })
      await newUser.save()
      createSession(req, newUser as { id: string; email: string })
    } catch (error: unknown) {
      let message

      if (error instanceof Error) {
        message = error.message
      }

      if (error instanceof GeneralError) {
        throw error
      }

      throw new DataBaseConnectionError('mongodb error: ', [message ?? ''])
    }

    return res.status(201).json({
      message: `Signup Success: user - id:${newUser.id} email: ${newUser.email}`,
    })
  }
)

export { router as signUpRouter }
