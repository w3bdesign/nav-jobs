import Head from "next/head"

import type { NextPage } from "next"

import JobListings from "@/components/JobListings/JobListings"
import Navbar from "@/components/Navbar/Navbar"
import { dehydrate, QueryClient } from "@tanstack/react-query"
import useJobs, { getJobs } from "@/state/useJobs"
import { Loader } from "@navikt/ds-react"

const Home: NextPage = () => {
  const { data, isLoading } = useJobs()

  return (
    <div id="root">
      <Head>
        <title>NAV Jobb Utforsker</title>
      </Head>
      <Navbar />
      {isLoading ? <Loader /> : <JobListings jobItems={data} />}
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(["jobs"], getJobs)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60, // In seconds
  }
}
