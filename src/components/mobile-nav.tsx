import React from 'react'
import Link from 'next/link'
import type { NavItem } from '@/types'
import { signOut, useSession } from 'next-auth/react'

import { siteRoutes } from '@/config/site'
import { Icons } from '@/components/icons'
import Button from '@/components/ui/button'
import MainNav from './main-nav'
import User from './user'

interface IMobileNavProps {
  navItems?: NavItem[]
  children?: React.ReactNode
}

const MobileNav = ({ navItems, children }: IMobileNavProps) => {
  const { data: session } = useSession()
  return (
    <div className="bg-brand-600 border border-brand-400 rounded-lg p-3 md:hidden absolute top-[10vh] inset-0 h-fit mx-4 z-50 animate-in slide-in-from-bottom-10 duration-500 fade-in-25">
      {navItems?.length ? (
        <MainNav
          navItems={navItems}
          classes="flex items-start flex-col space-y-5 mb-6"
        />
      ) : null}

      {children}
      {!session ? (
        <div className="flex flex-col w-full space-y-2">
          <Link
            href={siteRoutes.login}
            className="border border-brand-400 py-3 rounded-md text-center font-semibold text-sm hover:bg-brand-400 transition-colors duration-300"
          >
            Log In
          </Link>

          <Link href={siteRoutes.register}>
            <Button
              color="white"
              shape="rounded"
              className="w-full font-semibold text-sm"
            >
              Get Started
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col w-full">
          <User userClasses="mb-6 space-x-4 cursor-pointer" />
          <button
            onClick={() =>
              signOut({
                callbackUrl: `${window.location.origin}/${siteRoutes.login}`,
              })
            }
            className="border border-brand-400 py-3 rounded-md text-center font-semibold text-sm hover:bg-brand-400 transition-colors duration-300 w-full"
          >
            <Icons.logout className="mr-2 w-5 h-auto inline" />
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default MobileNav
