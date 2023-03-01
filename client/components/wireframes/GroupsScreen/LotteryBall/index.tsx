import React from 'react'

function LotteryBallIcon({ number }) {
  return (
    <div className="w-12 h-12 perspective-400">
      <div className="w-12 h-12 relative transform-style-preserve-3d rotate-x-20 rotate-y-20">
        <div className="w-12 h-12 absolute border border-gray-400 rounded-full bg-white shadow-md flex justify-center items-center text-lg font-bold text-black transform-style-preserve-3d">
          <span className="transform translate-z-5">{number}</span>
        </div>
        <div
          className="w-12 h-12 absolute border border-gray-400 rounded-full bg-white shadow-md transform translate-z-neg-12 rotate-y-90"
          style={{ transformStyle: 'preserve-3d', transform: 'rotateY(90deg)' }}
        ></div>
      </div>
    </div>
  )
}

export { LotteryBallIcon }
