import { type NextPage } from 'next'
import Head from 'next/head'

import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'
import MainNav from '@/components/main-nav'
import SiteHeader from '@/components/site-header'
import Button from '@/components/ui/button'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WIAM</title>
        <meta name="description" content="Analytics for Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader navItems={siteConfig.mainNav}>
        <MainNav
          navItems={siteConfig.mainNav}
          classes="md:flex border border-brand-400 justify-between px-3 py-1 max-w-[320px] lg:max-w-[420px] w-full rounded-full hidden"
        />
        <div className="md:flex space-x-2 hidden">
          <Button size="small">Log in</Button>
          <Button color="white" size="small">
            Get Started
            <Icons.rightArrow className="w-5 h-auto" />
          </Button>
        </div>
      </SiteHeader>
      <main className="max-w-8xl mx-auto px-6">
        <h1>Hello world</h1>
      </main>
    </>
  )
}

export default Home
