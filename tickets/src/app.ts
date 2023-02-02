import express, { Request } from 'express'
import cookieSession from 'cookie-session'
import { currentUser, errorHandler, NotFoundError, CustomResponseType } from '@sweez/libs'

// helps with erros that occur in asyc. Do not need to use 'next' to pass error
import 'express-async-errors'

const app = express()
app.set('trust proxy', true)
app.use(express.json())
app.use(
  cookieSession({
    signed: false, // no encryption

    // for testing purpose jest use http not https so for cookies need to set to false in test
    secure: process.env.NODE_ENV !== 'test',
  })
)
app.use(currentUser)

app.get('/health', (req: Request, res: CustomResponseType) => {
  res.status(200).json({ message: 'Tickets health check good' })
})

app.all('*', (req: Request) => {
  throw new NotFoundError(req.originalUrl, ['Not Found'])
})

app.use(errorHandler)

export { app }
