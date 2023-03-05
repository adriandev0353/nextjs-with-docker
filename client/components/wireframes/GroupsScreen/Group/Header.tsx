import React from 'react'

interface IGroupHeaderProps {
    name: string
    moderator: string
  }
  
  function Header({ name, moderator }: IGroupHeaderProps) {
    return (
      <>
        <h2 className=' text-left text-xl pb-2'>{name} Group</h2>
        <h3 className='text-left text-base pb-1'>Moderator: {moderator}</h3>
        <h3 className='text-left text-xs pb-1'>Deadline For Weekly Drawling: 10/21/2023 5:30PM</h3>
      </>
    )
  }
  
  export { Header }