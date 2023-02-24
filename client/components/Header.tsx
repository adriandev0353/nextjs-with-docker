import Link from 'next/link'
import Router from 'next/router'
import React, { type ReactElement } from 'react'
import { useCallRequest } from '../hooks/useCallRequest'
import { type ICurrentUserProps, EMethod } from '../shared-types'

interface LinkConfigType {
  label: string
  href: string
}

interface Ihambergerprops {
  show: boolean
}

const HambergerMenu: React.FC<Ihambergerprops> = ({show}) => {
  if (show) return (
    < div className={`sm:hidden flex justify-end m-2 h-15`}>
      <button className="flex items-center px-3 py-2 border rounded-md text-secondary-accent border-gray-400 bg-white hover:bg-gray-300 active:bg-gray-400 transform transition-transform duration-300">
        <svg className="h-4 w-3">
          <rect x="0" y="0" width="20" height="2" rx="1" fill="currentColor" />
          <rect x="0" y="7" width="20" height="2" rx="1" fill="currentColor" />
          <rect x="0" y="14" width="20" height="2" rx="1" fill="currentColor" />
        </svg>
      </button>
    </div>
  )
}

export const Header = ({ currentUser }: ICurrentUserProps) => {
  const { doRequest } = useCallRequest({
    url: '/api/users/signout',
    method: EMethod.POST,
  })
  const linkConfigs: LinkConfigType[] = [
    currentUser && { label: 'Sign Out', href: '/auth/signout' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
  ].flatMap((linkConfig) => linkConfig || [])
  const onSignOutHandler = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    await doRequest()
    await Router.push('/')
  }
  const links: ReactElement[] = linkConfigs.map((link, index) => {
    if (link.label === 'Sign Out') {
      return (
        <a
          key={index}
          className="sign-out cursor-pointer"
          onClick={onSignOutHandler}
        >
          Sign Out
        </a>
      )
    }

    return (
      <li key={index}>
        <Link href={link.href}>{link.label}</Link>
      </li>
    )
  })

  return (
    <>
      <nav className={`justify-between bg-secondary border-4 border-secondary-accent border-b-0 
        ${currentUser ? 'hidden sm:flex' : 'flex'}`
      }>
        <Link
          href="/"
          className="pl-4"
        >
          Home
        </Link>
        <div className="pr-4">
          <ul className="">{links}</ul>
        </div>
      </nav>
      <HambergerMenu show={!!currentUser} />
    </>
  )
}
