import { StoreProvider } from "easy-peasy"
import Head from "next/head"
import React from "react"
import { NextPage } from "next/types"

import store from "../store/index"

import "@navikt/ds-css"
import "@navikt/ds-css-internal"

import "../assets/scss/App.scss"
import "../assets/css/animate.min.css"

//import { AppProps } from "next/app"

type Props = StoreProvider["props"] & { children: React.ReactNode }

const StoreProviderCasted = StoreProvider as unknown as React.ComponentType<Props>

const MyApp: NextPage<Props> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <StoreProviderCasted store={store}>
        <Component {...pageProps} />
      </StoreProviderCasted>
    </>
  )
}

export default MyApp
