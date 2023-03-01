import React, { useContext } from 'react'
import { LotteryBallIcon } from '../../LotteryBall'
import { MenuContext } from '../MenuContentProvider'

const CloseIcon = ({ onClose }) => {
  return (
    <div
      className="w-8 h-8 rounded-full shadow-[0_0px_2px_3px_rgba(0,0,0,0.3)]
        bg-secondary-accent 
        text-white flex items-center justify-center
        hover:bg-primary"
      onClick={onClose}
    >
      x
    </div>
  )
}
const MenuDrawer = ({ show, closeMenu }) => {
  const { MenuContent } = useContext(MenuContext)
  const GroupMenuContent =  MenuContent || <div />

  if (!show) {
    return null
  }

  return (
    <>
      <div className="transparency h-screen w-screen bg-gray-500 opacity-50 relative" />
      <div
        className="absolute top-3 right-0 h-5/6 w-3/4 border-3
          border-secondary-accent rounded-lg drop-shadow-2xl bg-white
          opacity-90
          flex flex-col
          text-secondary-accent
          font-bold
          text-lg
          p-4"
      >
        <div className="flex-1 border-2 border-primary rounded-2xl flex-col relative">
          <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4">
            <CloseIcon onClose={closeMenu} />
          </div>
          <ul className="m-8">
            {GroupMenuContent}
            <li className="p-2 flex ">
              <LotteryBallIcon number="2" />
              <div className="ml-2">Show Only Your Tickets</div>
            </li>
            <li className="p-2 flex ">
              <LotteryBallIcon number="3" />
              <div className="ml-2">Show All Tickets</div>
            </li>
            <li className="p-2 flex ">
              <LotteryBallIcon number="4" />
              <div className="ml-2">Review Rules & Regulations</div>
            </li>
            <li className="p-2 flex ">
              <LotteryBallIcon number="5" />
              <div className="ml-2">Log Off</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export {
  MenuDrawer
}