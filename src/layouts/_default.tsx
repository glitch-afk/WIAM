import React, { type ReactNode } from "react"
import SiteHeader from "@/layouts/header/_default"
import type { NavItem } from "@/types"

import { cn } from "@/lib/utils"

interface IDefaultLayoutProps {
  contentClassName?: string
  pageNav?: ReactNode
  navItems?: NavItem[]
}

const DefaultLayout = ({
  children,
  contentClassName,
  pageNav,
  navItems,
}: React.PropsWithChildren<IDefaultLayoutProps>) => {
  return (
    <div className="mx-auto w-full">
      <header className="w-full mx-auto my-6 container">
        <SiteHeader mobileNavItems={navItems}>{pageNav}</SiteHeader>
      </header>
      <main className={cn(" mx-auto", contentClassName)}>{children}</main>
    </div>
  )
}

export default DefaultLayout
