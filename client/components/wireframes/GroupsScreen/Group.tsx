import React, { useContext, useEffect } from 'react'
import { MenuContext, IMenuContext } from './HamburgerMenu/MenuContentProvider'
import { LotteryBallIcon } from './LotteryBall'
import { log } from '@sweez/libs'

export interface Igroup {
  name: string
  moderator: string
  member_status: 'member' | 'moderator' | 'pending' | 'none'
  weekly_lottery: 'enrolled' | 'not-enrolled'
  tickets_purchased: number
  tickets_submitted: number
  newgroup_msgs: number
}

interface IgroupProps {
  group: Igroup
}

const addMenuContent = (group: Igroup, setMenuContent) => {
  const MenuContent: React.FC = () => (
    <div className="p-2 flex">
      <LotteryBallIcon number="1" />
      <div className="ml-2">Moderator</div>
    </div>
  )

  log('group member_status: ', group.member_status)
  if (group.member_status === 'moderator') { 
    setMenuContent(<MenuContent />)
  }
}
const GroupScreen: React.FC<IgroupProps> = ({ group }) => {
  const { setMenuContent } = useContext<IMenuContext>(MenuContext) 
 
  useEffect(() => {
    log('useEffect: addMenuContent called')
    addMenuContent(group, setMenuContent)
  }, [group])

  return (
    <div>
      <h2>Group: {group.name}</h2>
      <i className="text-center block">Moderator: {group.moderator}</i>
      <ul className="text-center mt-10">
        <li>Member Status: {group.member_status}</li>
        <li>Weekly Lottery: {group.weekly_lottery}</li>
        <li>New Group Messages: {group.newgroup_msgs}</li>
        <li>Tickets Purchased: {group.tickets_purchased}</li>
        <li>Tickets Submitted: {group.tickets_submitted}</li>
        <li>
          Tickets entries left:{' '}
          {group.tickets_purchased - group.tickets_submitted}
        </li>
      </ul>
    </div>
  )
}
const AddGroupScreen: React.FC = () => {
  return (
    <div>
      <h2>Add Group Screen</h2>
      <div className="text-center">Not Actual Screen: Screen Under Construction</div>
    </div>
  )
}

export { GroupScreen, AddGroupScreen }
