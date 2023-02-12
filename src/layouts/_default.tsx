import React from "react"

import { cn } from "@/lib/utils"

const DefaultLayout = ({
  children,
  contentClassName,
}: React.PropsWithChildren<{ contentClassName?: string }>) => {
  return (
    <div>
      <main className={cn("min-h-screen", contentClassName)}>{children}</main>
    </div>
  )
}

export default DefaultLayout
