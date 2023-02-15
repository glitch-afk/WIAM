import type { NavItem } from '@/types'

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'WIAM',
  description: 'Analytics for Web3',
  mainNav: [
    {
      title: 'Home',
      href: '/',
      disabled: false,
    },
    {
      title: 'Use Cases',
      href: '/use-cases',
      disabled: true,
    },
    {
      title: 'Blog',
      href: '/blog',
      disabled: true,
    },
    {
      title: 'Docs',
      href: '/docs',
      disabled: true,
    },
  ],
  links: {
    twitter: 'https://twitter.com/0xv3n0m_',
    github: 'https://github.com/glitch-afk',
    docs: '/',
  },
}
