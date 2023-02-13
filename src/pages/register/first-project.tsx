import React, { type ReactElement } from "react"
import DefaultLayout from "@/layouts/_default"

import Button from "@/components/ui/button/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AddProject = () => {
  return (
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
  )
}

AddProject.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout contentClassName="flex min-h-[90vh] w-full items-center justify-center">
      {page}
    </DefaultLayout>
  )
}

export default AddProject
