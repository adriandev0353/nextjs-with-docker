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
