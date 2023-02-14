import type { NavItem } from "@/types"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  homeNav: NavItem[]
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
      external: false,
      disabled: false,
    },
    {
      title: "Use Cases",
      href: "#",
      external: false,
      disabled: true,
    },
    {
      title: "Blog",
      href: "#",
      external: false,
      disabled: true,
    },
    {
      title: "Docs",
      href: "#",
      external: false,
      disabled: true,
    },
  ],
  homeNav: [
    {
      title: "Feedback",
      href: "#",
      external: false,
      disabled: true,
    },
    {
      title: "Blog",
      href: "#",
      external: false,
      disabled: true,
    },
    {
      title: "Docs",
      href: "#",
      external: false,
      disabled: true,
    },
  ],
  links: {
    twitter: "https://twitter.com/0xv3n0m_",
    github: "https://github.com/glitch-afk",
  },
}
