import React from 'react'
import type { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { siteRoutes } from '@/config/site'
import { getServerAuthSession } from '@/lib/auth'
import AddProjectForm from '@/components/add-project-form'
import { Icons } from '@/components/icons'
import SiteHeader from '@/components/site-header'
import Button from '@/components/ui/button'

const AddProject = () => {
  return (
    <>
      <Head>
        <title>WIAM - Add Project</title>
        <meta name="description" content="Add new Project" />
      </Head>
      <SiteHeader>
        <Link className="hidden md:flex" href={siteRoutes.home}>
          <Button shape="rounded" className="text-brand-50 hover:text-white">
            <Icons.upRight className="w-4 h-auto mr-2" />
            Home
          </Button>
        </Link>
      </SiteHeader>
      <main className="w-full px-6 2xl:px-0 mx-auto max-w-8xl">
        <div className="flex justify-center mt-48 lg:mt-52 xl:mt-56 2xl:mt-64">
          <AddProjectForm cardTitle="Add your Project" />
        </div>
      </main>
    </>
  )
}

export default AddProject

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
      },
    }
  }
  return {
    props: {
      session,
    },
  }
}
