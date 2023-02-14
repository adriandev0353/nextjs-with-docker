import { IUserDoc } from '../models/users'

interface IAuthWithUser {
  message: string
  user?: Partial<IUserDoc>
}

interface IAuthWithError {
  message: string
  error: string[]
}

export type AuthResponse = IAuthWithUser | IAuthWithError
