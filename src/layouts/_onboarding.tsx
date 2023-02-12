import React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import Button from "@/components/ui/button/button"
import SiteHeader from "./header/_default"

const OnboardingLayout = ({
  children,
  contentClassName,
}: React.PropsWithChildren<{ contentClassName?: string }>) => {
  return (
    <div className="mx-auto w-full ">
      <header className="w-full mx-auto my-6 container">
        <SiteHeader>
          <Button size="small" variant="solid" color="gray" shape="rounded">
            <Icons.arrowUpRight className="w-4 h-4 inline mr-1" />
            Log In
          </Button>
        </SiteHeader>
      </header>
      <main className={cn("mx-auto", contentClassName)}>{children}</main>
    </div>
  )
}

export default OnboardingLayout
