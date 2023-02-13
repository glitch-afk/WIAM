import type { ReactElement } from "react"
import Link from "next/link"
import DefaultLayout from "@/layouts/_default"
import type { NextPageWithLayout } from "@/types"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Link href="/register" className="underline text-purple-400">
        Register
      </Link>
      <br />
      <Link
        href="/register/first-project"
        className="underline text-purple-400"
      >
        Add Project
      </Link>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
