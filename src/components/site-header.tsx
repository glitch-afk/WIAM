import React, { useState } from 'react'
import type { NavItem } from '@/types'

import Logo from '@/components/site-logo'
import Button from '@/components/ui/button'
import { Icons } from './icons'
import MobileNav from './mobile-nav'
import Hamburger from './ui/hamburger'

interface ISiteHeaderProps {
  children?: React.ReactNode
  navItems?: NavItem[]
}

const SiteHeader = ({ children, navItems }: ISiteHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="p-6 xl:px-0 z-50 sticky top-0 w-full max-w-8xl mx-auto">
      <div className="w-full flex justify-between items-center">
        <Logo />
        {children}
        <div className="md:hidden justify-end">
          <Hamburger
            isOpen={isOpen}
            onClick={() => setIsOpen(isOpen ? false : true)}
          />
        </div>
      </div>
      {isOpen ? (
        <div className="md:hidden">
          <MobileNav navItems={navItems} />
        </div>
      ) : null}
    </div>
  )
}

export default SiteHeader
