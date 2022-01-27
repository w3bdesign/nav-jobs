import { StoreProvider } from 'easy-peasy'

import store from '../store/index'



import '@navikt/ds-css'
import '@navikt/ds-css-internal'

import '../assets/scss/App.scss'
import '../assets/css/animate.min.css'

import type { AppProps } from 'next/app'
import type { NextPage } from 'next'


const MyApp: NextPage<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <>
      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  )
}

export default MyApp
