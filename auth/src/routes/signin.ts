import express from 'express'
import { Request, NextFunction } from 'express'
import { body } from 'express-validator'
import { User } from '../models/users'
import { NotFoundError, GeneralError } from '@sweez/libs'
import { validateRequest } from '@sweez/libs'
import { Password } from '../libs/password'

// types
import { CustomResponseType } from '@sweez/libs'
import { createSession } from '../libs/createSession'

const router = express.Router()

router.post(
  '/api/users/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('You must supply a password'),
  ],
  validateRequest,
  async (req: Request, res: CustomResponseType, next: NextFunction) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      throw new NotFoundError('email', [`${email} Not Found`])
    }

    const isPasswordMatch = await Password.compare(user.password, password)
    if (!isPasswordMatch)
      throw new GeneralError(400, 'login failed', ['credentials not valid'])

    createSession(req, user as { id: string; email: string })
    return res.send({
      message: `signin user - id:${user.id}  email: ${user.email}`,
    })
  }
)

export { router as signInRouter }
