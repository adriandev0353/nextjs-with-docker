import React from 'react'

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

export { HambugerIcon }