import React from "react"
import SiteHeader from "@/layouts/header/_default"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const DefaultLayout = ({
  children,
  contentClassName,
}: React.PropsWithChildren<{ contentClassName?: string }>) => {
  return (
    <div className="mx-auto w-full">
      <header className="w-full mx-auto my-6 container">
        <SiteHeader items={siteConfig.mainNav} />
      </header>
      <main className={cn(" mx-auto", contentClassName)}>{children}</main>
    </div>
  )
}

export default DefaultLayout
