import React from "react"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import MainNav from "@/components/main-nav"
import Button from "@/components/ui/button"

const SiteHeader = () => {
  return (
    <div className="sticky top-0 z-40 w-full flex space-between items-center">
      <div className="w-full hidden md:flex items-center">
        <Icons.logo className="w-8 h-8 mr-1 inline" color="white" />
        <span className="uppercase flex font-bold text-2xl">
          {siteConfig.name}
        </span>
      </div>
      {/* center nav */}
      <div className="w-full">
        <MainNav items={siteConfig.mainNav} />
      </div>
      {/* right nav */}
      <div className="justify-end space-x-4 w-full flex">
        <Button variant="transparent" size="mini" shape="pill" color="primary">
          Log in
        </Button>
        <Button
          color="white"
          variant="solid"
          shape="pill"
          size="mini"
          className="font-medium"
        >
          Get Started
          <Icons.rightArrow className="inline h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  )
}

export default SiteHeader
