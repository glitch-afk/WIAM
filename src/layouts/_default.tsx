import React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import MainNav from "@/components/main-nav"
import SiteHeader from "@/components/site-header"
import Button from "@/components/ui/button"

interface IDefaultLayoutProps {
  contentClassName?: string
}

const DefaultLayout = ({
  children,
  contentClassName,
}: React.PropsWithChildren<IDefaultLayoutProps>) => {
  return (
    <div className="mx-auto w-full">
      <header className="w-full mx-auto my-6 container">
        <SiteHeader>
          <div className="col-start-2 col-span-1 md:flex items-center hidden">
            <MainNav
              items={siteConfig.mainNav}
              classes="border border-brand-400 px-4 py-2 rounded-full max-w-[400px]"
            />
          </div>
          {/* temporary */}
          <div className="col-start-3 col-span-1 md:flex justify-end items-center space-x-2 hidden">
            <Button size="mini">Log In</Button>
            <Button color="white" size="mini">
              Get Started
              <Icons.rightArrow className="inline ml-1 w-4 h-auto" />
            </Button>
          </div>
        </SiteHeader>
      </header>
      <main className={cn(" mx-auto", contentClassName)}>{children}</main>
    </div>
  )
}

export default DefaultLayout
