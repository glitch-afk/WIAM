import React from "react"
import Link from "next/link"
import SiteHeader from "@/layouts/header/_default"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import Button from "@/components/ui/button/button"

const DefaultLayout = ({
  children,
  contentClassName,
}: React.PropsWithChildren<{ contentClassName?: string }>) => {
  return (
    <div className="mx-auto w-full">
      <header className="w-full mx-auto my-6 container">
        <SiteHeader items={siteConfig.mainNav}>
          <Button
            variant="transparent"
            size="mini"
            shape="pill"
            color="primary"
          >
            Log in
          </Button>
          <Link
            href="/register"
            className="bg-white rounded-full px-4 h-8 text-brand-700 text-center flex items-center font-medium text-sm"
          >
            Get Started
            <Icons.rightArrow className="inline h-4 w-4 ml-1" />
          </Link>
        </SiteHeader>
      </header>
      <main className={cn(" mx-auto", contentClassName)}>{children}</main>
    </div>
  )
}

export default DefaultLayout
