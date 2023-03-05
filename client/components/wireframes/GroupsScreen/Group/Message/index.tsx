import React from 'react'
import { Icon, Iicon } from './Icon'

interface IMessageProps {
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
  )
}

export { Message }