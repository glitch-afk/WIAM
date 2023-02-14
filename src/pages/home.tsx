import React from "react"
import type { GetServerSidePropsContext } from "next"
import Head from "next/head"
import Link from "next/link"
import { getServerAuthSession } from "@/server/auth"

import { siteConfig } from "@/config/site"
import { useDrawer } from "@/components/drawer-views/context"
import { Icons } from "@/components/icons"
import MobileNav from "@/components/mobile-nav"
import Logo from "@/components/site-logo"
import StatusCard from "@/components/status-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Button from "@/components/ui/button/button"

const Home = () => {
  const { isOpen, closeDrawer, openDrawer } = useDrawer()

  return (
    <>
      <Head>
        <title>Home - WIAM</title>
      </Head>
      <div className="w-full px-[1.5rem] xl:px-0 xl:container md:mx-auto max-w-8xl">
        <header className="sticky top-0 flex justify-between w-full my-6 items-center">
          <div className="col-start-1 col-span-1">
            <Logo />
          </div>

          <div className="col-start-2 col-span-1 flex items-center space-x-2 md:space-x-5">
            <nav className="hidden md:flex items-center space-x-5">
              {siteConfig.homeNav.map((item, idx) => (
                <Link
                  href={item.disabled ? "#" : (item.href as string)}
                  key={idx}
                  className="text-sm text-brand-50 hover:text-white transition-colors duration-300"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            {/* notifications */}
            <Icons.bell className="w-4 h-auto inline" />
            <div className="bg-brand-500 rounded-full p-2 flex items-center space-x-2">
              <Avatar className="w-6 h-6 md:w-8 md:h-8">
                <AvatarImage src="https://github.com/glitdch-afk.png" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              {/* <div className="bg-white rounded-full h-6 w-6" /> */}
              <span className="text-xs md:text-sm  text-brand-50 hover:text-white">
                johndoe@example.com
              </span>
            </div>
            {isOpen ? (
              <button onClick={closeDrawer}>
                <Icons.close className="w-10 h-10 cursor-pointer text-brand-50 hover:bg-brand-400 p-2 rounded-full transition-all duration-300" />
              </button>
            ) : (
              <button onClick={() => openDrawer("DASHBOARD_SIDEBAR")}>
                <Icons.menu className="md:hidden w-10 h-10 cursor-pointer text-brand-50 hover:bg-brand-400 p-2 rounded-full transition-all duration-300" />
              </button>
            )}
          </div>
        </header>
        {isOpen ? <MobileNav navLinks={siteConfig.homeNav} /> : null}
        {/* main content */}
        <main className="flex justify-center mt-8 sm:mt-16 md:mt-20">
          <div className="w-full max-w-7xl h-fit rounded-xl border-2 border-brand-500 bg-brand-600 px-6 py-12">
            {/* header */}
            <div className="flex justify-between items-center">
              <h2 className="text-lg sm:text-2xl md:text-4xl font-extrabold">
                Projects
              </h2>
              <Button color="white" className="font-bold">
                <Icons.plus className="w-6 h-auto inline mr-1" />
                Add Project
              </Button>
            </div>
            {/* project cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-12">
              <StatusCard />
              <StatusCard />
              <StatusCard />
              <StatusCard />
              <StatusCard />
              <StatusCard />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession(context)
  // uncomment in production
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //     },
  //   }
  // }
  return {
    props: {
      session,
    },
  }
}
