import React from 'react'

import { cn } from '@/lib/utils'
import Button from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

interface AddProjectFormProps extends React.HTMLAttributes<HTMLDivElement> {
  cardTitle?: string
  children?: React.ReactNode
}

const AddProjectForm = ({
  cardTitle,
  children,
  className,
  ...props
}: AddProjectFormProps) => {
  return (
    <div
      className={cn(
        'w-full max-w-md rounded-xl border-2 border-brand-500 bg-brand-600 px-6 py-12',
        className
      )}
      {...props}
    >
      <h2 className="mb-5 text-center text-xl font-semibold">{cardTitle}</h2>
      <p className="text-brand-100 text-sm md:text-base text-center">
        Adding your project will help you to track and analyze your project
        metrics.
      </p>
      <form
        className="mt-6 grid w-full items-center gap-y-4"
        // onSubmit={}              // TODO
      >
        <div className="space-y-1">
          <Label htmlFor="projectName">Project Name</Label>
          <Input
            placeholder="e.g. Cron app"
            type="text"
            id="projectName"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="projectUrl">Project Link</Label>
          <Input
            placeholder="e.g. cron.com"
            type="url"
            id="projectUrl"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
          />
        </div>
        <Button fullWidth color="white" shape="rounded">
          Next
        </Button>
      </form>
      {children}
    </div>
  )
}

export default AddProjectForm
