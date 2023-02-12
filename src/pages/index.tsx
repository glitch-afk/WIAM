import { ReactElement } from "react"
import DefaultLayout from "@/layouts/_default"
import { NextPageWithLayout } from "@/types"

const Home: NextPageWithLayout = () => {
  return <></>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
