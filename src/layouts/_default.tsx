import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import NavLinks from "@/components/NavLinks"
import { useDrawer } from "@/components/drawer-views/context"
import { Icons } from "@/components/icons"
import MobileNav from "@/components/mobile-nav"
import Logo from "@/components/site-logo"
import Button from "@/components/ui/button"

interface IDefaultLayoutProps {
  contentClassName?: string
}

const DefaultLayout = ({
  children,
  contentClassName,
}: React.PropsWithChildren<IDefaultLayoutProps>) => {
  const { isOpen, openDrawer, closeDrawer } = useDrawer()
  return (
    <div className="w-full px-[1.5rem] xl:px-0 xl:container md:mx-auto max-w-8xl">
      <header className="grid grid-cols-3 w-full h-[8vh] items-center">
        <div className="col-start-1 col-span-1">
          <Logo />
        </div>
        <div className="col-start-2 col-span-1 md:flex items-center hidden">
          <NavLinks
            items={siteConfig.mainNav}
            classes="border border-brand-400 hidden md:flex items-center px-4 py-2 rounded-full max-w-[420px] justify-between"
          />
        </div>
        <div className="col-start-3 col-span-1 md:flex justify-end items-center space-x-2 hidden">
          <Button size="mini">Log In</Button>
          <Link href="/register">
            <Button color="white" size="mini">
              Get Started
              <Icons.rightArrow className="inline ml-1 w-4 h-auto" />
            </Button>
          </Link>
        </div>
        <div className="col-span-2 col-start-3 inline-flex md:hidden justify-end">
          {isOpen ? (
            <button onClick={closeDrawer}>
              <Icons.close className="w-10 h-10 cursor-pointer text-brand-50 hover:bg-brand-400 p-2 rounded-full transition-all duration-300" />
            </button>
          ) : (
            <button onClick={() => openDrawer("DASHBOARD_SIDEBAR")}>
              <Icons.menu className="w-10 h-10 cursor-pointer text-brand-50 hover:bg-brand-400 p-2 rounded-full transition-all duration-300" />
            </button>
          )}
        </div>
      </header>
      {isOpen ? <MobileNav navLinks={siteConfig.mainNav} /> : null}

      <main className={cn("mx-auto", contentClassName)}>{children}</main>
    </div>
  )
}

export default DefaultLayout
