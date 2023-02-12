import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}
