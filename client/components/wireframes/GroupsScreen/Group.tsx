import React from 'react'
import { Header } from './Group/Header'
import { Message } from './Group/Message'

const MockMessages = [
  {
    name: 'Bryce Peters',
    text: 'Thanks for joining the lottery group now lets win some money!!!',
    date: '10/21/2023 5:30PM',
    icons: [
      { name: 'like', count: 1, selectedBy: ['Bryce Peters'] },
      { name: 'frown', count: 1, selectedBy: ['Bryce Peters'] }
    ]
  }
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
    <div className=''>
      <Header name={group.name} moderator={group.moderator} />
      <div className='flex justify-center w-full h-full text-gray-800 p-2 pb-0'>
        <div className="flex flex-col h-[80vh] w-full max-w-xl bg-white shadow-xl rounded-lg">
          
          <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-auto">
            <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
              <div className="flex w-full mt-1 space-x-3 max-w-xs border-2 border-red-500">
                <div>
                  <span className="text-xs text-gray-500 ml-2">Bryce Peters</span>
                  <div className="bg-gray-300 p-3 rounded-full">
                    <p className="text-sm">Thanks for joining the lottery group now lets win some money!!!</p>
                    {/* reactions icons */}
                    <div className='flex justify-evenly pt-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
</svg>

                    </div>
                  </div>
                  <span className="text-xs text-gray-500 leading-none float-right p-1 mr-2">2 min ago</span>
                </div>
              </div>
              <Message 
                name={MockMessages[0].name}
                text={MockMessages[0].text}
                date={MockMessages[0].date}
                icons={MockMessages[0].icons}
              />
         
              <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                <div>
                <span className="text-xs text-gray-500 ml-2">You</span>
                  <div className="bg-blue-600 text-white p-3 rounded-full">
                    <p className="text-sm">Yea Man Lets do it!!!!!</p>
                  </div>
                  <span className="text-xs text-gray-500 leading-none float-right p-1 mr-2">2 min ago</span>
                </div>
              </div>

              <div className="flex w-full mt-1 space-x-3 max-w-xs">
                <div>
                <span className="text-xs text-red-700 ml-2">System</span>
                  <div className="bg-gray-300 p-3 rounded-full">
                    <p className="text-sm text-green-500">This week lottery is now open!</p>
                  </div>
                  <span className="text-xs text-gray-500 leading-none float-right p-1 mr-2">2 min ago</span>
                </div>
              </div>
              
            </div>
          </div>

        </div>
        
      </div>
      <button type = "submit"className ="float-right mr-2" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 bg-gray-500 rounded-lg ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
</svg>
</button>
      <div className=" flex flex-row justify-start w-full p-2 border-gray-500 bg-gray-500 rounded-lg">
            <input type="text"  className=" w-3/4 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Enter your Message..." required />
            <button type="submit" className="flex text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
           
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
</button>

        </div>
      <div className=' flex justify-center pt-12'>
      <button className=" relative font-thin text-xl text-green-500">

              <div className="absolute inset-x-0 h-full -bottom-2 bg-gray-100 border border-gray-500 rounded-lg "></div>

              <div className=" bg-blue-100 border border-gray-500 rounded-lg py-0.5 px-2 transition transform duration-200 hover:translate-y-2">Enter Weekly Lottery Drawing</div>
            </button>
</div>
    </div>
  )
}
const AddGroupScreen: React.FC = () => {
  return (
    <div>
      <h2>Add Group Screen</h2>
    </div>
  )
}

export { GroupScreen, AddGroupScreen }
