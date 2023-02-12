import React from "react"
import Link from "next/link"
import Sidebar from "@/layouts/sidebar/_default"
import { NavItem } from "@/types"

import { cn } from "@/lib/utils"
import { useDrawer } from "./drawer-views/context"
import { Icons } from "./icons"
import Button from "./ui/button/button"

interface MainNavProps {
  items?: NavItem[]
}

const MainNav = ({ items }: MainNavProps) => {
  const { isOpen, openDrawer } = useDrawer()
  return (
    <>
      {items?.length ? (
        <nav className="hidden md:flex justify-between border border-brand-400 rounded-full px-3 py-2">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-semibold text-white hover:text-brand-100 sm:text-sm",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  <span className="block w-full">{item.title}</span>
                </Link>
              )
          )}
        </nav>
      ) : null}
      {/* mobile */}
      <div className="md:hidden">
        {isOpen ? (
          <Sidebar items={items} />
        ) : (
          // @ts-ignore
          <button onClick={openDrawer}>
            <Icons.logo className="w-8 h-8" />
          </button>
        )}
      </div>
    </>
  )
}

export default MainNav
