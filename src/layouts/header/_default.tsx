import React from "react"
import Link from "next/link"
import type { NavItem } from "@/types"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { useDrawer } from "@/components/drawer-views/context"
import { Icons } from "@/components/icons"
import Button from "@/components/ui/button"
import Sidebar from "../sidebar/_default"

interface ISiteHeaderProps {
  children: React.ReactNode
  mobileNavItems?: NavItem[]
}

const SiteHeader = ({ children, mobileNavItems }: ISiteHeaderProps) => {
  const { isOpen, openDrawer } = useDrawer()
  return (
    <div className="w-full grid grid-cols-3 mx-auto">
      {mobileNavItems ? (
        !isOpen ? (
          <div className="md:hidden col-start-1">
            <Button
              title="Close"
              color="white"
              shape="circle"
              variant="transparent"
              size="small"
              onClick={() => openDrawer("DASHBOARD_SIDEBAR")}
            >
              <Icons.menu className="h-auto w-6" color="white" />
            </Button>
          </div>
        ) : (
          <Sidebar items={mobileNavItems} />
        )
      ) : null}
      {/* logo */}
      <Link
        href="/"
        className={cn(
          "flex items-center col-span-1",
          mobileNavItems ? "col-start-2 md:col-start-1" : "col-start-1"
        )}
      >
        <Icons.logo className="w-8 h-8 inline" />
        <span className="uppercase text-2xl font-bold">{siteConfig.name}</span>
      </Link>

      {children}
    </div>
  )
}

export default SiteHeader
