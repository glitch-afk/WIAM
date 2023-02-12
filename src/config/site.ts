import type { NavItem } from "@/types"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "WIAM",
  description: "Analytics for web3",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Use Cases",
      href: "/",
    },
    {
      title: "Blog",
      href: "/",
    },
    {
      title: "Docs",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/0xv3n0m_",
    github: "https://github.com/glitch-afk",
  },
}
