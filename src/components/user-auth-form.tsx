import React from 'react'
import { useSearchParams } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn, useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'

import { siteRoutes } from '@/config/site'
import { userAuthSchema } from '@/lib/schema'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import Button from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  cardTitle: string
  children: React.ReactNode
}

type FormData = z.infer<typeof userAuthSchema>

const UserAuthForm = ({
  cardTitle,
  className,
  children,
  ...props
}: UserAuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const searchParams = useSearchParams()
  const { data: session } = useSession()

  console.log(session)

  async function onSubmit(data: FormData) {
    setIsLoading(true)
    const signInResult = await signIn('email', {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams.get('from') || '/',
    })

    setIsLoading(false)

    if (!signInResult?.ok) {
      console.log({
        title: 'Something went wrong.',
        message: 'Your sign in request failed. Please try again.',
        type: 'error',
      })
    }

    console.log({
      title: 'Check your email',
      message: 'We sent you a login link. Be sure to check your spam too.',
      type: 'success',
    })
  }

  return (
    <div
      className={cn(
        'w-full max-w-md rounded-xl border-2 border-brand-500 bg-brand-600 px-6 py-12',
        className
      )}
      {...props}
    >
      <h2 className="mb-5 text-center text-xl font-semibold">{cardTitle}</h2>

      {/* signin with google */}
      <Button
        className="mt-4 w-full bg-brand-500 text-brand-100"
        variant="ghost"
        shape="rounded"
        size="small"
        color="primary"
        onClick={() =>
          signIn('google', {
            callbackUrl: siteRoutes.home,
          })
        }
      >
        <Icons.google className="mr-2 h-6 w-6 inline" />
        Continue with Google
      </Button>

      {/* singin with email */}
      <form
        className="mt-6 grid w-full items-center gap-1.5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Label htmlFor="email">Email Address</Label>
        <Input
          type="email"
          id="email"
          placeholder="mail@example.com"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          disabled={isLoading}
          {...register('email')}
        />
        {errors?.email && (
          <p className="text-xs text-rose-600 mt-1">{errors.email.message}</p>
        )}
        <Button
          className="mt-4 font-semibold"
          isLoading={isLoading}
          color="white"
          size="small"
          shape="rounded"
        >
          Continue with Email
        </Button>
      </form>

      {children}
    </div>
  )
}

export default UserAuthForm
