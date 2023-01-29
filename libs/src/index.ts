import { Response } from 'express'


export interface ResponseBody {
  message: string
  errors?: string[]
}

export type CustomResponseType = Response<ResponseBody>

export * from './middleware/currentUser'
export * from './middleware/requireAuth'
export * from './middleware/errorHandler'
export * from './middleware/validate-request'
export * from './customErrors'


