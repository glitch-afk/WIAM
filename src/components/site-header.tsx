import React from "react"

import { siteConfig } from "@/config/site"
import { Icons } from "./icons"

interface ISiteHeaderProps {
  children: React.ReactNode
}

const SiteHeader = ({ children }: ISiteHeaderProps) => {
  return (
    <div className="w-full mx-auto grid grid-cols-3">
      {/* logo */}
      <div className="flex items-center col-start-1 col-span-1 gap-x-2">
        <Icons.logo className="w-8 h-auto inline mr-2" />
        <span className="text-2xl font-bold">{siteConfig.name}</span>
      </div>
      {children}
    </div>
  )
}

export default SiteHeader
