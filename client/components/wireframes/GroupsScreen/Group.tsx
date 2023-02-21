import React from 'react'

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

const Group: React.FC<IgroupProps> = ({ group }) => {
  return (
    <div>
      <h2>Group {group.name}</h2>
      <i className="text-center block">Moderator: {group.moderator}</i>
      <ul className="text-center mt-10">
        <li>Member Status: {group.member_status}</li>
        <li>Weekly Lottery: {group.weekly_lottery}</li>
        <li>New Group Messages: {group.newgroup_msgs}</li>
        <li>Tickets Purchased: {group.tickets_purchased}</li>
        <li>Tickets Submitted: {group.tickets_submitted}</li>
        <li>Tickets entries left: {group.tickets_purchased - group.tickets_submitted}</li>
      </ul>
    </div>
  )
}

export { Group }