import express, { type Request, Response } from 'express'
import cookieSession from 'cookie-session'
// helps with erros that occur in asyc. Do not need to use 'next' to pass error
import 'express-async-errors'
import { currentUser, errorHandler, NotFoundError } from '@sweez/libs'
import { signUpRouter } from './routes/signup'
import { signInRouter } from './routes/signin'
import { currentUserRouter } from './routes/current-user'
import { signOutRouter } from './routes/signout'
import { AuthResponse } from './custom-shared-types'

const app = express()

app.set('trust proxy', true)
app.use(express.json())
app.use(
  cookieSession({
    // doesnt need certif...which is ok for right now
    signed: false,

    /* important: in local dev call your host with https or it wont set cookie */

    // for testing purpose jest use http not https so for cookies need to set to false in test
    secure: process.env.NODE_ENV !== 'test',
  })
)
app.use(currentUser)
app.get('/health', (req: Request, res: Response<AuthResponse>) => {
  res.status(200).json({ message: 'Auth health check good' })
})
app.use(signUpRouter)
app.use(signInRouter)
app.use(currentUserRouter)
app.use(signOutRouter)
app.all('*', (req: Request) => {
  throw new NotFoundError(req.originalUrl, ['Not Found'])
})
app.use(errorHandler)

export { app }
