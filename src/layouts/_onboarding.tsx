import React from "react"

import { cn } from "@/lib/utils"
import SiteHeader from "./header/_default"

const OnboardingLayout = ({
  children,
  contentClassName,
}: React.PropsWithChildren<{ contentClassName?: string }>) => {
  return (
    <div className="mx-auto w-full ">
      <header className="w-full mx-auto my-6 container">
        <SiteHeader />
      </header>
      <main className={cn("mx-auto", contentClassName)}>{children}</main>
    </div>
  )
}

export default OnboardingLayout
