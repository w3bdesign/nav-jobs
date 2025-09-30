import Head from "next/head"
import React from "react"
import { NextPage } from "next/types"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import "@navikt/ds-css"
import "@navikt/ds-css-internal"

import "@/assets/scss/App.scss"
import "@/assets/css/animate.min.css"

import { AppProps } from "next/app"

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
