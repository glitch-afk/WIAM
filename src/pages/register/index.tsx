import React, { type ReactElement } from "react"
import type { GetServerSidePropsContext } from "next"
import OnboardingLayout from "@/layouts/onboarding"
import { getServerAuthSession } from "@/server/auth"
import { signIn } from "next-auth/react"

import { Icons } from "@/components/icons"
import Logo from "@/components/site-logo"
import Button from "@/components/ui/button/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const RegisterPage = () => {
  return (
    <>
      <header className="grid grid-cols-3 w-full h-[8vh] items-center">
        <div className="col-start-1 col-span-1">
          <Logo />
        </div>
        <div className="col-start-3 col-span-1 flex justify-end items-center space-x-2">
          <Button shape="rounded" className="text-brand-100 hover:text-white">
            <Icons.login className="mr-2 w-4 h-auto inline" />
            Log In
          </Button>
        </div>
      </header>
      <main className="flex items-center justify-center h-[92vh]">
        <div className="w-full max-w-md rounded-xl border-2 border-brand-500 bg-brand-600 px-6 py-12">
          <h2 className="mb-5 text-center text-xl font-semibold">
            Create your Account
          </h2>
          {/* signin with google */}
          <Button
            className="mt-4 w-full bg-brand-500 text-brand-100"
            variant="ghost"
            shape="rounded"
            size="small"
            color="primary"
            onClick={() =>
              signIn("google", {
                callbackUrl: "/",
              })
            }
          >
            <Icons.google className="mr-2 h-6 w-6 inline" />
            Continue with Google
          </Button>

          {/* singin with email */}
          <div className="mt-6 grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email Address</Label>
            <Input type="email" id="email" placeholder="mail@example.com" />
            <Button
              className="mt-4 font-semibold"
              color="white"
              size="small"
              shape="rounded"
            >
              Continue with Email
            </Button>
          </div>

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
        </div>
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
