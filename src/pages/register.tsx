import React from 'react'
import type { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { siteRoutes } from '@/config/site'
import { getServerAuthSession } from '@/lib/auth'
import { Icons } from '@/components/icons'
import SiteHeader from '@/components/site-header'
import Button from '@/components/ui/button'
import UserAuthForm from '@/components/user-auth-form'

const Register = () => {
  return (
    <>
      <Head>
        <title>WIAM - Register</title>
        <meta name="description" content="Create new Account" />
      </Head>
      <SiteHeader>
        <Link className="hidden md:flex" href={siteRoutes.login}>
          <Button shape="rounded">
            <Icons.login className="w-4 h-auto mr-2" />
            Log in
          </Button>
        </Link>
      </SiteHeader>
      <main className="w-full px-6 2xl:px-0 mx-auto max-w-8xl">
        <div className="flex justify-center mt-48 lg:mt-52 xl:mt-56 2xl:mt-64">
          <UserAuthForm cardTitle="Create your Account">
            <p className="mt-8 text-center text-sm text-brand-100">
              You acknowledge that you read, and agree to our&nbsp;
              <span className="font-semibold underline text-brand-100">
                Terms of Service
              </span>
              &nbsp;and our&nbsp;
              <span className="font-semibold underline text-brand-100">
                Privacy Policy
              </span>
            </p>
          </UserAuthForm>
        </div>
      </main>
    </>
  )
}

export default Register

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession(context)
  if (session) {
    return {
      redirect: {
        destination: '/',
      },
    }
  }
  return {
    props: {
      session,
    },
  }
}
