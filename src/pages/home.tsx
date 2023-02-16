import React from 'react'
import Head from 'next/head'

import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'
import MainNav from '@/components/main-nav'
import SiteHeader from '@/components/site-header'
import StatusCard from '@/components/status-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Button from '@/components/ui/button'
import User from '@/components/user'

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>WIAM - Home</title>
        <meta name="description" content="Create new Account" />
      </Head>
      <SiteHeader navItems={siteConfig.homeNav}>
        <div className="hidden md:flex items-center space-x-4">
          <MainNav
            navItems={siteConfig.homeNav}
            classes="flex space-x-4 md:space-x-10"
          />
          <Icons.bell className="w-6 sm:w-10 h-auto" />
          <User userClasses="bg-brand-500 space-x-3 rounded-full cursor-pointer" />
        </div>
      </SiteHeader>
      <main className="w-full px-6 2xl:px-0 mx-auto max-w-7xl md:mt-16">
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
            <StatusCard status="SUCCESS" />
            <StatusCard status="SUCCESS" />
            <StatusCard status="FAILED" />
            <StatusCard status="SUCCESS" />
            <StatusCard status="DEFAULT" />
            <StatusCard status="SUCCESS" />
          </div>
        </div>
      </main>
    </>
  )
}

export default ProjectsPage
