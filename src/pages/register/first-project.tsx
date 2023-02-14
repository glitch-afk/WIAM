import React, { type ReactElement } from "react"
import Head from "next/head"
import OnboardingLayout from "@/layouts/onboarding"

import { Icons } from "@/components/icons"
import Logo from "@/components/site-logo"
import Button from "@/components/ui/button/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AddProject = () => {
  return (
    <>
      <Head>
        <title>WIAM - AddProject</title>
      </Head>
      <header className="grid grid-cols-3 w-full my-6 items-center">
        <div className="col-start-1 col-span-1">
          <Logo />
        </div>
        <div className="col-start-3 col-span-1 flex justify-end items-center space-x-2">
          <Button shape="rounded" className="text-brand-100 hover:text-white">
            <Icons.logout className="mr-2 w-4 h-auto inline" />
            Log out
          </Button>
        </div>
      </header>
      <main className="flex justify-center mt-48 lg:mt-52 xl:mt-56 2xl:mt-64">
        <div className="w-full max-w-md rounded-xl border-2 border-brand-500 bg-brand-600 px-4 py-12">
          <h2 className="mb-5 text-center text-xl font-semibold">
            Add your first project
          </h2>
          <p className="my-4 text-center text-sm text-brand-100">
            Adding your project will help you to track and analyze your project
            metrics.
          </p>
          {/* project name */}
          <div className="mt-6 grid w-full items-center gap-1.5">
            <Label htmlFor="project_name">Project Name</Label>
            <Input type="text" id="project_name" placeholder="e.g. Cron app" />
          </div>
          {/* project link */}
          <div className="mt-6 grid w-full items-center gap-1.5">
            <Label htmlFor="project_name">Project link</Label>
            <Input type="text" id="project_name" placeholder="e.g. cron.com" />
          </div>
          <Button
            variant="solid"
            color="white"
            size="small"
            shape="rounded"
            className="w-full mt-4 font-semibold"
          >
            Next
          </Button>
        </div>
      </main>
    </>
  )
}

AddProject.getLayout = function getLayout(page: ReactElement) {
  return <OnboardingLayout>{page}</OnboardingLayout>
}

export default AddProject
