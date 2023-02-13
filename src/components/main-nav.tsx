import React from "react"
import Link from "next/link"
import type { NavItem } from "@/types"

interface IMainNavProps {
  items: NavItem[]
}

const MainNav = ({ items }: IMainNavProps) => {
  return (
    <>
      {items?.length ? (
        <nav className="hidden md:flex items-center justify-between border border-brand-400 px-3 py-1 rounded-full w-full max-w-[450px]">
          {items.map((item, idx) =>
            item.external ? (
              <a
                href={item.disabled ? "#" : item.href}
                key={idx}
                className="text-sm font-semibold text-white hover:text-brand-50 transition-colors duration-200"
              >
                {item.title}
              </a>
            ) : (
              <Link
                key={idx}
                href={item.disabled ? "#" : (item.href as string)}
                className="text-sm font-semibold text-white hover:text-brand-50 transition-colors duration-200"
              >
                {item.title}
              </Link>
            )
          )}
        </nav>
      ) : null}
    </>
  )
}

export default MainNav
