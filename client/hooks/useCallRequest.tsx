import React, { ReactElement, useState } from 'react'
import axios from 'axios'
import { DisplayErrorMsgs } from '../components/DisplayErrorMsgs'

// types
import { AxiosError } from 'axios'
export interface IMessageErrorResponse {
  message: String
  errors: String[]
}

export interface IMessageSuccessResponse {
  message: String
}

export enum EMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

interface IReqParams<D> {
  url: string
  method: EMethod
  headers?: any
  data?: D | any
}

export function useCallRequest<D>(request: IReqParams<D>) {
  const [errors, setErrors] = useState<ReactElement>()

  const doRequest = async function <T>(data?: T) {
    if (data) request.data = data

    try {
      setErrors(undefined)
      const response = await axios<IMessageSuccessResponse>(request)
      return response.data.message
    } catch (error) {
      let reqErrorMsg: IMessageErrorResponse = { message: '', errors: [] }
      if (error instanceof AxiosError && error.response?.data.errors) {
        reqErrorMsg = error.response?.data
      } else if (error instanceof Error) {
        console.log('NOT axios error OR no Errors in object', error)
        reqErrorMsg = { message: error.message, errors: [error.message] }
      }

      setErrors(<DisplayErrorMsgs error={reqErrorMsg} />)
    }
  }

  return { doRequest, errors }
}
