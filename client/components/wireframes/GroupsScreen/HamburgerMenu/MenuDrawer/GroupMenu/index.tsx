import React from 'react'
import Router from 'next/router'
import { LotteryBallIcon } from '../../../LotteryBall'
import { useCallRequest } from '../../../../../../hooks/useCallRequest'
import { EMethod } from '../../../../../../shared-types'
import { Igroup } from '../../../Group'

interface IGroupMenuProps {
  group: Igroup
}

const generateRandomNumbers1to69 = () => {
  return Array(69)
    .fill({})
    .map((_, index) => {
      return {
        number: index + 1,
        value: Math.random(),
      }
    })
    .sort((a, b) => a.value - b.value)
}

export function GroupMenu({ group }: IGroupMenuProps) {
  const { doRequest } = useCallRequest({
    url: '/api/users/signout',
    method: EMethod.POST,
  })
  const onSignOutHandler = async () => {
    await doRequest()
    await Router.push('/')
  }
  const randomNumbers1to69 = generateRandomNumbers1to69()

  return (
    <ul className="m-8">
      {group.member_status === 'moderator' && (
        <li className="p-2 flex hover:bg-secondary-accent hover:opacity-60 hover:text-white">
          <LotteryBallIcon number={randomNumbers1to69[0].number} />
          <div className="ml-2">Moderator</div>
        </li>
      )}

      <li className="p-2 flex hover:bg-secondary-accent hover:opacity-60 hover:text-white">
        <LotteryBallIcon number={randomNumbers1to69[1].number} />
        <div className="ml-2">Show Only Your Tickets</div>
      </li>
      <li className="p-2 flex  hover:bg-secondary-accent hover:opacity-60 hover:text-white">
        <LotteryBallIcon number={randomNumbers1to69[2].number} />
        <div className="ml-2">Show All Tickets</div>
      </li>
      <li className="p-2 flex hover:bg-secondary-accent hover:opacity-60 hover:text-white">
        <LotteryBallIcon number={randomNumbers1to69[3].number} />
        <div className="ml-2">Review Rules & Regulations</div>
      </li>
      <li
        className="p-2 flex hover:bg-secondary-accent hover:opacity-60 hover:text-white"
        onClick={onSignOutHandler}
      >
        <LotteryBallIcon number={randomNumbers1to69[4].number} />
        <div className="ml-2">Log Off</div>
      </li>
    </ul>
  )
}
