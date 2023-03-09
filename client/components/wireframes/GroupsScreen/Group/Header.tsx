import React from 'react'

interface IGroupHeaderProps {
  name: string
  moderator: string
}

function Header({ name, moderator }: IGroupHeaderProps) {
  return (
    <div className="flex flex-col content-center">
      <h2 className="text-xl pb-2">{name} Group</h2>
      <h3 className="text-base pb-1">Moderator: {moderator}</h3>
      <h3 className="text-xs pb-1">
        Deadline For Weekly Drawling: 10/21/2023 5:30PM
      </h3>
    </div>
  )
}

export { Header }
