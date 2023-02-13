import React, { type ReactNode } from "react"

import { cn } from "@/lib/utils"
import SiteHeader from "./header/_default"

const OnboardingLayout = ({
  children,
  contentClassName,
  slot,
}: React.PropsWithChildren<{
  contentClassName?: string
  slot: ReactNode
}>) => {
  return (
    <div className="mx-auto w-full ">
      <header className="w-full mx-auto my-6 container">
        <SiteHeader>
          {/*  */}
          {slot}
        </SiteHeader>
      </header>
      <main className={cn("mx-auto", contentClassName)}>{children}</main>
    </div>
  )
}

export default OnboardingLayout
