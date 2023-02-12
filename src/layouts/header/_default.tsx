import React from "react"
import Link from "next/link"
import type { NavItem } from "@/types"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import MainNav from "@/components/main-nav"

interface MainNavProps {
  children: React.ReactNode
  items?: NavItem[]
}

const SiteHeader = ({ items, children }: MainNavProps) => {
  return (
    <div className="sticky top-0 z-40 w-full flex space-between items-center">
      <Link href="/" className="w-full hidden md:flex items-center">
        <Icons.logo className="w-8 h-8 mr-1 inline" color="white" />
        <span className="uppercase flex font-bold text-2xl">
          {siteConfig.name}
        </span>
      </Link>
      {/* center nav */}
      <div className="w-full">
        <MainNav items={items} />
      </div>
      {/* right nav */}
      <div className="justify-end space-x-4 w-full flex">{children}</div>
    </div>
  )
}

export default SiteHeader
