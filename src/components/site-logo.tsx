import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center col-start-1 col-span-1 gap-x-2">
      <Icons.logo className="w-8 h-auto inline mr-2" />
      <span className="text-2xl font-bold">{siteConfig.name}</span>
    </Link>
  )
}

export default Logo
