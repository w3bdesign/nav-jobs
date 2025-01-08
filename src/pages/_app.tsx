import { StoreProvider } from "easy-peasy"
import Head from "next/head"
import React from "react"
import { NextPage } from "next/types"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import store from "../store/index"

import "@navikt/ds-css"
import "@navikt/ds-css-internal"

import "@/assets/scss/App.scss"
import "@/assets/css/animate.min.css"

import { AppProps } from "next/app"

type Props = StoreProvider["props"] & { children: React.ReactNode }

const StoreProviderCasted = StoreProvider as unknown as React.ComponentType<Props>

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <StoreProviderCasted store={store}>
          <Component {...pageProps} />
        </StoreProviderCasted>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
