import React, { useState } from 'react'
import { MenuDrawer } from './MenuDrawer'
import { HambugerIcon } from './HamburgerIcon'

interface IHamburgerProps {
  show: boolean
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
