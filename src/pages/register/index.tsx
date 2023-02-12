import React, { type ReactElement } from "react"
import type { GetServerSidePropsContext } from "next"
import OnboardingLayout from "@/layouts/_onboarding"
import { getServerAuthSession } from "@/server/auth"
import { signIn } from "next-auth/react"

import { Icons } from "@/components/icons"
import Button from "@/components/ui/button/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const RegisterPage = () => {
  return (
    <div className="w-full max-w-md rounded-xl border-2 border-brand-500 bg-brand-600 p-4">
      <h2 className="my-5 text-center text-xl font-semibold text-brand-50">
        Create your Account
      </h2>
      {/* signin with google */}
      <Button
        className="mt-4 w-full bg-brand-500 text-brand-100"
        variant="ghost"
        shape="rounded"
        size="small"
        color="primary"
        onClick={() => signIn()}
      >
        <Icons.google className="mr-2 h-6 w-6 inline" />
        Continue with Google
      </Button>

      {/* singin with email */}
      <div className="mt-6 grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email Address</Label>
        <Input type="email" id="email" placeholder="mail@example.com" />
        <Button className="mt-4" color="white" size="small">
          Continue with Email
        </Button>
      </div>

      <p className="my-8 text-center text-sm text-brand-100">
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
  )
}

RegisterPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <OnboardingLayout contentClassName="flex min-h-[90vh] w-full items-center justify-center">
      {page}
    </OnboardingLayout>
  )
}

export default RegisterPage

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession(context)
  // if (session) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //     },
  //   };
  // }
  return {
    props: {
      session,
    },
  }
}
