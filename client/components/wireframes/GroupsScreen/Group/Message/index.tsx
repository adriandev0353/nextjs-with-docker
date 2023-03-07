import React from 'react'
import { Icon, Iicon } from './Icon'

export interface IMessageProps {
  name: string
  text: string
  date: string
  icons: Iicon[]
}

interface IIConProps {
  icons: Iicon[]
}

function ICons({icons}: IIConProps) {
  if (!icons) return null

  return (
    <div className='flex justify-evenly pt-1'>
      {icons.map((icon) => {
        return (
          <Icon key={icon.name} name={icon.name} count={icon.count} selectedBy={icon.selectedBy} />
        )
      })}
    </div>
  )
}

function Message({name, text, date, icons}: IMessageProps) {
  return (
    <>
   
    <div className="flex w-full mt-1 space-x-3 max-w-xs border-2 border-red-500">
    <div>
      <span className="text-xs text-gray-500 ml-2">{name}</span>
      <div className="bg-gray-300 p-3 rounded-full">
        <p className="text-sm">{text}</p>
        <ICons icons={icons} />
      </div>
      <span className="text-xs text-gray-500 leading-none float-right p-1 mr-2">{date}</span>
    </div>
  </div>
     {/* <div className="flex w-full mt-1 space-x-3 max-w-xs">
     <div>
     <span className="text-xs text-red-700 ml-2">System</span>
       <div className="bg-gray-300 p-3 rounded-full">
         <p className="text-sm text-green-500">This week lottery is now open!</p>
       </div>
       <span className="text-xs text-gray-500 leading-none float-right p-1 mr-2">2 min ago</span>
     </div>
   </div> */}

   {/* conditional based if user sends the message or member/system sends message */}
   <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                <div>
                <span className="text-xs text-gray-500 ml-2">You</span>
                  <div className="bg-blue-600 text-white p-3 rounded-full">
                    <p className="text-sm">Yea Man Lets do it!!!!!</p>
                  </div>
                  <span className="text-xs text-gray-500 leading-none float-right p-1 mr-2">2 min ago</span>
                </div>
              </div> 
   </>
  )
}

export { Message}
