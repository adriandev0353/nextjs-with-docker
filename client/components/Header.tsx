import Link from 'next/link'
import Router from 'next/router'
import React, { type ReactElement } from 'react'
import { useCallRequest } from '../hooks/useCallRequest'
import { type ICurrentUserProps, EMethod } from '../shared-types'

interface LinkConfigType {
  label: string
  href: string
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
    <nav className="flex justify-between bg-secondary border-4 border-secondary-accent border-b-0">
      <Link
        href='/'
        className="pl-4"
      >
        Home
      </Link>
      <div className="pr-4">
        <ul className="">{links}</ul>
      </div>
    </nav>
  )
}
