import React from "react"
import Link from "next/link"
import type { NavItem } from "@/types"
import { motion } from "framer-motion"
import { useSession } from "next-auth/react"

import Button from "@/components/ui/button"

interface IMobileNavProps {
  navLinks?: NavItem[]
}

const MobileNav = ({ navLinks }: IMobileNavProps) => {
  const { data: session } = useSession()
  return (
    <motion.div
      initial={{ opacity: 0, y: "32%" }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{
        opacity: 0,
        y: "-100%",
      }}
      transition={{ duration: 0.8, type: "spring" }}
      className="bg-brand-600 border border-brand-400 rounded-lg p-3 md:hidden absolute top-[8vh] inset-0 h-fit mx-4"
    >
      {navLinks?.length ? (
        <nav className="flex flex-col space-y-5 mb-6">
          {navLinks.map((item, idx) => (
            <Link
              href={item.disabled ? "#" : (item.href as string)}
              key={idx}
              className="text-brand-50 hover:text-white cursor-pointer text-sm"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}

      {!session ? (
        <div className="flex flex-col w-full space-y-2">
          <Link
            href="/register"
            className="border border-brand-400 py-3 rounded-md text-center font-semibold text-sm hover:bg-brand-400 transition-colors duration-300"
          >
            Log In
          </Link>
          <Link href="/register">
            <Button
              color="white"
              shape="rounded"
              className="w-full font-semibold text-sm"
            >
              Get Started
            </Button>
          </Link>
        </div>
      ) : (
        <Button>Logout</Button>
      )}
    </motion.div>
  )
}

export default MobileNav
