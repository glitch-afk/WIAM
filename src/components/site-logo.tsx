import React from 'react'
import Link from 'next/link'

import { siteConfig, siteRoutes } from '@/config/site'
import { Icons } from '@/components/icons'

const Logo = () => {
  return (
    <Link href={siteRoutes.home} className="flex items-center">
      <Icons.logo className="w-8 h-auto inline mr-1" />
      <span className="text-xl font-bold">{siteConfig.name}</span>
    </Link>
  )
}

export default Logo
