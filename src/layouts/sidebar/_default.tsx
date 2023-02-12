import React from "react"
import Link from "next/link"
import { NavItem } from "@/types"

import { cn } from "@/lib/utils"
import { useDrawer } from "@/components/drawer-views/context"
import { Icons } from "@/components/icons"
import Button from "@/components/ui/button/button"

interface ISidebarProps {
  className?: string
  items?: NavItem[]
}

const Sidebar = ({ className, items }: ISidebarProps) => {
  const { closeDrawer, isOpen } = useDrawer()
  return (
    <aside
      className={cn(
        "absolute top-0 z-40 h-fit w-full max-w-full inset-x-0 bg-brand-400 xs:w-80 xl:fixed xl:w-72 2xl:w-80 rounded-lg",
        className
      )}
    >
      <div className="relative flex h-24 items-center justify-between overflow-hidden px-6 py-4">
        <Icons.logo className="w-8 h-8" />
        <div className="md:hidden">
          <Button
            title="Close"
            color="white"
            shape="circle"
            variant="transparent"
            size="small"
            onClick={closeDrawer}
          >
            <Icons.close className="h-auto w-6" color="white" />
          </Button>
        </div>
      </div>
      {items?.length ? (
        <nav className="flex flex-col px-6 space-y-4 mb-6 text-sm">
          {items.map((item, idx) => (
            <Link
              // @ts-ignore
              href={item.disabled ? "#" : item.href}
              key={idx}
              className="text-white hover:text-brand-100"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : (
        <></>
      )}
    </aside>
  )
}

export default Sidebar
