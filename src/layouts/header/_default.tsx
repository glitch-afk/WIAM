import React from "react"
import Link from "next/link"
import type { NavItem } from "@/types"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import MainNav from "@/components/main-nav"
import Button from "@/components/ui/button"

interface MainNavProps {
  items?: NavItem[]
}

const SiteHeader = ({ items }: MainNavProps) => {
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
      <div className="justify-end space-x-4 w-full flex">
        <Button variant="transparent" size="mini" shape="pill" color="primary">
          Log in
        </Button>
        <Link
          href="/register"
          className="bg-white rounded-full px-4 h-8 text-brand-700 text-center flex items-center font-medium text-sm"
        >
          Get Started
          <Icons.rightArrow className="inline h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  )
}

export default SiteHeader
