import React from "react"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface IStatusCardProps {
  cardTitle?: string
  cardDescription?: string
  listingDate?: string
}

const StatusCard = ({
  cardTitle,
  cardDescription,
  listingDate,
}: IStatusCardProps) => {
  return (
    <Link
      href="#"
      className="col-span-1 rounded-md bg-brand-500 border border-brand-400 p-4"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Avatar className="w-6 h-6 md:w-8 md:h-8">
            <AvatarImage src="https://github.com/glitdch-afk.png" />
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold text-sm sm:text-base">
              {cardTitle ?? "WIAM"}
            </h3>
            <p className="text-[11px] text-brand-100">
              {listingDate ? `listed on ${listingDate}` : "listed on 12th Mar"}
            </p>
          </div>
        </div>
        {/* status pill */}
        <div className="text-xs md:text-sm text-green-500 bg-green-300/30 rounded-full px-2 font-medium">
          Live
        </div>
      </div>
      <p className="text-xs text-brand-100 w-full mt-3 text-ellipsis overflow-hidden break-all">
        {cardDescription ??
          "Lorem ipsum dolor sit cdsr consectetur adipisicing elit. Accusantium, debitis."}
      </p>
    </Link>
  )
}

export default StatusCard
