import React, { useState } from "react"
import Link from "next/link"
import type { NavItem } from "@/types"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface IMainNavProps {
  items?: NavItem[]
  classes?: string
}

const NavLinks = ({ items, classes }: IMainNavProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null)
  return (
    <>
      {items?.length ? (
        <nav className={cn("w-full", classes)}>
          {items.map((item, idx) =>
            item.external ? (
              <motion.a
                href={item.disabled ? "#" : item.href}
                key={idx}
                target="_blank"
                // className="text-sm font-semibold text-white hover:text-brand-50 transition-colors duration-200"
                className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
                rel="noreferrer"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-brand-500"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.15 } }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">{item.title}</span>
              </motion.a>
            ) : (
              <Link
                key={idx}
                href={item.disabled ? "#" : (item.href as string)}
                // className="text-sm font-semibold text-white hover:text-brand-50 transition-colors duration-200"
                className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-brand-50 hover:text-white transition-colors delay-150 hover:delay-[0ms]"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-brand-400"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.15 } }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">{item.title}</span>
              </Link>
            )
          )}
        </nav>
      ) : null}
    </>
  )
}

export default NavLinks
