import { IMessageProps } from './Message/index'
import { Message } from './Message/index'
import { MessageInput } from './MessageInput'
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
    <>
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
              {!expanded ? <MessageInput /> : null}
            </Fragment>
          </div>
        </div>
      </div>
      <div className=" flex justify-center pt-12">
        <button className=" relative font-thin text-xl text-green-500">
          <div className="absolute inset-x-0 h-full -bottom-2 bg-gray-100 border border-gray-500 rounded-lg "></div>

          <div className=" bg-blue-100 border border-gray-500 rounded-lg py-0.5 px-2 transition transform duration-200 hover:translate-y-2">
            Enter Weekly Lottery Drawing
          </div>
        </button>
      </div>
    </>
  )
}

export { Log }
