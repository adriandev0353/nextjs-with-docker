import React, { useState } from 'react'
import { LotteryBallIcon } from '../LotteryBall'

interface IHamburgerProps {
  show: boolean
}
const HambugerIcon = ({ show, openMenu }) => {
  if (!show) {
    return null
  }

  return (
    <div className="flex justify-end">
      <button
        className="m-2 items-center border-2 px-3 py-3
      rounded-md shadow-[0_0px_5px_7px_rgba(0,0,0,0.2)]
     text-secondary-accent bg-white border-secondary-accent hover:bg-gray-300 active:bg-gray-400"
        onClick={openMenu}
      >
        <svg className=" w-4 h-4 border-1 border-green-300">
          <rect
            x="0"
            y="0"
            width="20"
            height="2"
            rx="1"
            fill="currentColor"
          />
          <rect
            x="0"
            y="7"
            width="20"
            height="2"
            rx="1"
            fill="currentColor"
          />
          <rect
            x="0"
            y="14"
            width="20"
            height="2"
            rx="1"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  )
}
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
            <li className="p-2 flex ">
              <LotteryBallIcon number="1" />
              <div className="ml-2">Moderator</div>
            </li>
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
const HamburgerMenu: React.FC<IHamburgerProps> = ({ show }) => {
  const [expanded, setExpanded] = useState(false)
  const handleOpen = () => {
    setExpanded(true)
  }
  const handleClose = () => {
    setExpanded(false)
  }

  if (!show) {
    return null
  }

  return (
    <div className="sm:hidden z-10 absolute top-0 right-0 w-screen">
      <HambugerIcon
        show={!expanded}
        openMenu={handleOpen}
      />
      <MenuDrawer
        show={expanded}
        closeMenu={handleClose}
      />
    </div>
  )
}

export { HamburgerMenu }
