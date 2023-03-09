import React from 'react'
import { Header } from './Group/Header'
import { Log } from './Group/Log'

const MockMessages = [
  {
    name: 'Bryce Peters',
    text: 'Thanks for joining the lottery group now lets win some money!!!',
    date: '10/21/2023 5:30PM',
    icons: [
      { name: 'like', count: 1, selectedBy: ['Bryce Peters'] },
      { name: 'frown', count: 1, selectedBy: ['Bryce Peters'] },
      { name: 'rocket', count: 1, selectedBy: ['Bryce Peters', 'anthony'] },
      { name: 'smile', count: 1, selectedBy: ['Bryce Peters'] },
    ],
  },
  {
    name: 'System',
    text: 'This Week Lottery is Now Open',
    date: '10/22/2023 5:40PM',
    icons: [
      { name: 'like', count: 1, selectedBy: ['Bryce Peters'] },
      { name: 'frown', count: 1, selectedBy: ['Bryce Peters, Edward Sweezey'] },
      { name: 'rocket', count: 1, selectedBy: ['Bryce Peters', 'anthony'] },
      { name: 'smile', count: 1, selectedBy: ['Bryce Peters'] },
    ],
  },
]

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

const GroupScreen: React.FC<IgroupProps> = ({ group }) => {
  return (
    <div className="">
      <Header
        name={group.name}
        moderator={group.moderator}
      />

      <Log messages={MockMessages} />

      <div className=" flex justify-center pt-12">
        <button className=" relative font-thin text-xl text-green-500">
          <div className="absolute inset-x-0 h-full -bottom-2 bg-gray-100 border border-gray-500 rounded-lg "></div>

          <div className=" bg-blue-100 border border-gray-500 rounded-lg py-0.5 px-2 transition transform duration-200 hover:translate-y-2">
            Enter Weekly Lottery Drawing
          </div>
        </button>
      </div>
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
