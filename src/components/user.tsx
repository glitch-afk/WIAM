import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const User = ({ userClasses }: { userClasses?: string }) => {
  const { data: session } = useSession()
  return (
    <div
      className={cn(
        'p-1 lg:p-2 flex items-center text-brand-50 hover:text-white cursor-pointer hover:outline-1 hover:outline-brand-400',
        userClasses
      )}
    >
      <Avatar className="w-6 sm:w-8 h-auto">
        <AvatarImage src={session?.user.image as string} />
        <AvatarFallback>
          <Image
            src={'https://github.com/glitch-afk.png'}
            fill
            className="rounded-full"
            alt="user_image"
          />
        </AvatarFallback>
      </Avatar>
      <span className="text-sm md:hidden lg:flex">{session?.user.email}</span>
    </div>
  )
}

export default User
