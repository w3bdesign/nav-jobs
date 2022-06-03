import { StoreProvider } from "easy-peasy"
import Head from "next/head"
import { ReactNode } from "react"

import store from "../store/index"

import "@navikt/ds-css"
import "@navikt/ds-css-internal"

import "../assets/scss/App.scss"
import "../assets/css/animate.min.css"

import { AppProps } from "next/app"

type Props = AppProps & { children: ReactNode }

const StoreProviderCasted = StoreProvider as unknown as React.ComponentType<Props>

const MyApp = ({ Component, pageProps }: Props) => {
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
