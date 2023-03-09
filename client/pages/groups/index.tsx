import React from 'react'
import { GroupScreens } from '../../components/wireframes/GroupsScreen'
import { HamburgerMenu } from '../../components/wireframes/GroupsScreen/HamburgerMenu'

function GroupsPage() {
  return (
    <div className="page-container">
      <main className="flex-1 flex flex-col relative">
        <HamburgerMenu show={true} />
        <div className="groups flex-1 flex overflow-hidden">
          <GroupScreens />
        </div>
      </main>
    </div>
  )
}

export default GroupsPage
