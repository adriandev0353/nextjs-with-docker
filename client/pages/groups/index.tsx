import React from 'react'
import { GroupScreens } from '../../components/wireframes/GroupsScreen'
import { HamburgerMenu } from '../../components/wireframes/GroupsScreen/HamburgerMenu'
import { MenuContentProvider } from '../../components/wireframes/GroupsScreen/HamburgerMenu/MenuContentProvider'

function GroupsPage() {
  return (
    <div className="page-container">
      <main className="flex-1 flex flex-col relative">
        <MenuContentProvider>
          <HamburgerMenu show={true} />
          <div className="groups flex-1 flex">
            <GroupScreens />
          </div>
        </MenuContentProvider>
      </main>
    </div>
  )
}

export default GroupsPage
