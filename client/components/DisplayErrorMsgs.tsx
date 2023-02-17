import React from 'react'
import { type IMessageErrorResponse } from '../shared-types'

interface IDisplayErrorMsgsProps {
  error: IMessageErrorResponse
}
function DisplayErrorMsgs({ error }: IDisplayErrorMsgsProps) {
  const { message, errors } = error

  if (!errors) return null

  return (
    <div className="mt-3">
      <div className="text-red-600 text-center">{message}</div>
      <ul className="text-red-600 ml-2 text-center">
        {errors[0] &&
          errors.map((err, i) => (
            <li
              key={i}
              className="err_msg"
            >
              {err}
            </li>
          ))}
      </ul>
    </div>
  )
}

export { DisplayErrorMsgs }
