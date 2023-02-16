import React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export type STATUS_TYPE = 'SUCCESS' | 'FAILED' | 'DEFAULT'

interface IStatusCardProps {
  cardTitle?: string
  cardDescription?: string
  listingDate?: string
  status: STATUS_TYPE | string
}

const StatusCard = ({
  cardTitle,
  cardDescription,
  listingDate,
  status,
}: IStatusCardProps) => {
  return (
    <Link
      href="#"
      className="col-span-1 rounded-md bg-brand-500 border border-brand-400 p-4"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Avatar className="w-6 h-6 md:w-8 md:h-8">
            <AvatarImage src="" /> {/* Fetch url favicon  */}
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold text-sm sm:text-base">{cardTitle}</h3>
            <p className="text-[11px] text-brand-100">
              {listingDate && `listed on ${listingDate}`}
            </p>
          </div>
        </div>
        {/* status pill */}
        <div
          className={cn(
            'text-xs md:text-sm rounded-full px-2 font-medium text-white bg-brand-700',
            status === 'SUCCESS' && 'text-green-500 bg-green-300/30',
            status === 'FAILED' && 'text-red-500 bg-red-300/30'
          )}
        >
          {(status === 'SUCCESS' && 'LIVE') ||
            (status === 'FAILED' && 'ERROR') ||
            (status === 'DEFAULT' && 'SLEEPING')}
          &nbsp; •
        </div>
      </div>
      <p className="text-xs text-brand-100 w-full mt-3 text-ellipsis overflow-hidden break-all">
        {cardDescription}
      </p>
    </Link>
  )
}

export default StatusCard
