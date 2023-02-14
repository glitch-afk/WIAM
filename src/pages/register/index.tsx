import React, { type ReactElement } from "react"
import type { GetServerSidePropsContext } from "next"
import Link from "next/link"
import OnboardingLayout from "@/layouts/onboarding"
import { getServerAuthSession } from "@/server/auth"

import { Icons } from "@/components/icons"
import Logo from "@/components/site-logo"
import Button from "@/components/ui/button/button"
import UserAuthForm from "@/components/user-auth-form"

const RegisterPage = () => {
  return (
    <>
      <header className="grid grid-cols-3 w-full h-[8vh] items-center">
        <div className="col-start-1 col-span-1">
          <Logo />
        </div>
        <Link
          href="/login"
          className="col-start-3 col-span-1 flex justify-end items-center space-x-2"
        >
          <Button shape="rounded" className="text-brand-100 hover:text-white">
            <Icons.login className="mr-2 w-4 h-auto inline" />
            Log In
          </Button>
        </Link>
      </header>
      <main className="flex items-center justify-center h-[92vh]">
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
      </main>
    </>
  )
}

RegisterPage.getLayout = function getLayout(page: ReactElement) {
  return <OnboardingLayout>{page}</OnboardingLayout>
}

export default RegisterPage

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession(context)
  if (session) {
    return {
      redirect: {
        destination: "/",
      },
    }
  }
  return {
    props: {
      session,
    },
  }
}
