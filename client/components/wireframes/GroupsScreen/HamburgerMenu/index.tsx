import React, { useState } from 'react'

interface IHamburgerProps {
  show: boolean
}

const HamburgerMenu: React.FC<IHamburgerProps> = ({ show }) => {
  const [expanded, setExpanded] = useState(false)
  const handlePress = () => {
    setExpanded(prevState => !prevState)
  }

  if (!show) {
    return null
  }

  return (
    <div className="sm:hidden z-10 absolute top-0 right-0 w-screen"> 
      {!expanded &&
        <div className="flex justify-end">
          <button
            className="m-2 items-center border-4 px-3 py-3
            rounded-md text-secondary-accent bg-white border-secondary-accent hover:bg-gray-300 active:bg-gray-400"
            onTouchStart={handlePress}
            onMouseDown={handlePress}
          >
            <svg className=" w-4 h-4 border-1 border-green-300">
              <rect x="0" y="0" width="20" height="2" rx="1" fill="currentColor" />
              <rect x="0" y="7" width="20" height="2" rx="1" fill="currentColor" />
              <rect x="0" y="14" width="20" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>
        </div>
      }
      {expanded && (
        <div 
          onTouchEnd={handlePress}
          onMouseUp={handlePress}
        >
          <div className="transparency h-screen w-screen bg-black opacity-30 relative" />
          <div className="absolute top-3 right-0 h-5/6 w-3/4 border-3
             border-secondary-accent rounded-lg drop-shadow-2xl bg-white
              opacity-90
              flex flex-col
              text-secondary-accent
              font-bold
              text-lg
              p-5
          ">
            <div>Log Off</div>
            <div>Moderator Settings</div>
          </div>
        </div>
      )}
       
    </div>
  )
}

export { HamburgerMenu }
