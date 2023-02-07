export interface IMessageErrorResponse {
  message: string
  errors: string[]
}

export interface IMessageSuccessResponse {
  message: string
}

export interface ICurrentUserProps {
  currentUser: string | null
}

export enum EMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

/* eslint-disable */ // the use of any
export interface IReqParams<D> {
  url: string
  method: EMethod
  headers?: any
  data?: D | any
}
/* eslint-enable */
