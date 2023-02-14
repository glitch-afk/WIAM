import React, { type ReactElement } from "react"
import Link from "next/link"
import OnboardingLayout from "@/layouts/onboarding"
import type { NextPageWithLayout } from "@/types"

import { Icons } from "@/components/icons"
import Logo from "@/components/site-logo"
import Button from "@/components/ui/button"
import UserAuthForm from "@/components/user-auth-form"

const LoginPage: NextPageWithLayout = () => {
  return (
    <>
      <header className="grid grid-cols-3 w-full h-[8vh] items-center">
        <div className="col-start-1 col-span-1">
          <Logo />
        </div>
        <Link
          href="/register"
          className="col-start-3 col-span-1 flex justify-end items-center space-x-2"
        >
          <Button shape="rounded" className="text-brand-100 hover:text-white">
            Get Started
            <Icons.rightArrow className="ml-1 w-5 h-auto inline" />
          </Button>
        </Link>
      </header>
      <main className="flex items-center justify-center h-[92vh]">
        <UserAuthForm cardTitle="Log in to your account">
          <p className="mt-8 text-center text-sm text-brand-100 underline underline-offset-2">
            Forgot Password?
          </p>
        </UserAuthForm>
      </main>
    </>
  )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <OnboardingLayout>{page}</OnboardingLayout>
}

export default LoginPage
