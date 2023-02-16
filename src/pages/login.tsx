import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { siteRoutes } from '@/config/site'
import { Icons } from '@/components/icons'
import SiteHeader from '@/components/site-header'
import Button from '@/components/ui/button'
import UserAuthForm from '@/components/user-auth-form'

const Login = () => {
  return (
    <>
      <Head>
        <title>WIAM - Login</title>
        <meta name="description" content="Create new Account" />
      </Head>
      <SiteHeader>
        <Link className="hidden md:flex" href={siteRoutes.register}>
          <Button shape="rounded">
            <Icons.login className="w-4 h-auto mr-2" />
            Get Started
          </Button>
        </Link>
      </SiteHeader>
      <main className="w-full px-6 2xl:px-0 mx-auto max-w-8xl">
        <div className="flex justify-center mt-48 lg:mt-52 xl:mt-56 2xl:mt-64">
          <UserAuthForm cardTitle="Log in to your Account">
            <p className="mt-8 text-center text-sm text-brand-100 underline underline-offset-2">
              Forgot Password?
            </p>
          </UserAuthForm>
        </div>
      </main>
    </>
  )
}

export default Login
