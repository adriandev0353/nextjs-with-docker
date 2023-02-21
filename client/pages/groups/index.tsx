import React from 'react'
import { GroupScreens } from '../../components/wireframes/GroupsScreen'

function GroupsPage () {
  return (
    <div className='page-container'>
      <main className="flex-1 flex flex-col">
        <div className="groups flex-1 flex">
          <GroupScreens />
        </div> 
      </main> 
    </div>
  )
}

export default GroupsPage