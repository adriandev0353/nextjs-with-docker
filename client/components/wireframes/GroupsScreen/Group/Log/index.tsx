import { IMessageProps } from '../Message/index'
import { Message } from '../Message/index'
import { CreateMessage } from './CreateMessage'
import { Fragment, useState } from 'react'
import { ToggleCreateMessage } from './ToggleCreateMessage'

interface ILogProps {
  messages: IMessageProps[]
}

function Log({ messages }: ILogProps) {
  const [expanded, setExpanded] = useState(false)
  const toggleMessageBox = () => {
    setExpanded((prevState) => !prevState)
  }

  return (
    <div className="flex justify-center w-full h-full text-gray-800 p-2 pb-0">
      <div className="flex flex-col h-[80vh] w-full max-w-xl bg-white shadow-xl rounded-lg">
        <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-auto">
          <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
            {messages.map((message) => {
              return (
                <Message
                  name={message.name}
                  text={message.text}
                  date={message.date}
                  icons={message.icons}
                />
              )
            })}
            {/* conditional with toggle to show Create Message */}
          </div>
          <Fragment>
            <ToggleCreateMessage toggleMessageBox={toggleMessageBox} />
            {!expanded ? <CreateMessage /> : null}
          </Fragment>
        </div>
      </div>
    </div>
  )
}

export { Log }
