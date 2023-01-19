// types
import { IMessageErrorResponse } from '../hooks/useCallRequest'

interface IDisplayErrorMsgsProps {
  error: IMessageErrorResponse
}

function DisplayErrorMsgs({ error }: IDisplayErrorMsgsProps) {
  const { message, errors } = error
  if (!errors) return null

  return (
    <div className='alert alert-danger'>
      <div className='err_msg'>{message}</div>
      <ul className='my-0'>
        {errors[0] &&
          errors.map((err, i) => (
            <li key={i} className='err_msg'>
              {err}
            </li>
          ))}
      </ul>
    </div>
  )
}

export { DisplayErrorMsgs }
