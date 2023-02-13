import type { ReactElement } from "react"
import Link from "next/link"
import DefaultLayout from "@/layouts/_default"
import Sidebar from "@/layouts/sidebar/_default"
import type { NextPageWithLayout } from "@/types"

import { siteConfig } from "@/config/site"
import { useDrawer } from "@/components/drawer-views/context"
import { Icons } from "@/components/icons"
import MainNav from "@/components/main-nav"
import Button from "@/components/ui/button"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Link href="/register" className="underline text-purple-400">
        Register
      </Link>
      <br />
      <Link
        href="/register/first-project"
        className="underline text-purple-400"
      >
        Add Project
      </Link>
    </>
  )
}

const Slot = () => {
  return (
    <>
      <MainNav items={siteConfig.mainNav} />
      <div className="col-start-3 hidden md:flex space-x-4 justify-end">
        <Button size="mini">Log in</Button>
        <Link href="/register" className="flex">
          <Button color="white" size="mini">
            Get Started
            <Icons.rightArrow className="w-4 h-auto inline" />
          </Button>
        </Link>
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout pageNav={<Slot />} navItems={siteConfig.mainNav}>
      {page}
    </DefaultLayout>
  )
}

export default Home
