import jwt from 'jsonwebtoken'

// types
import { Request } from 'express'

export function createSession(
  req: Request,
  user: { id: string; email: string }
) {
  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_KEY! 
  )

  req.session = {
    jwt: userJwt,
  }
}
