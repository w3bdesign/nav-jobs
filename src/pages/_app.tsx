import { StoreProvider } from "easy-peasy";

import store from "../store/index";

import type { AppProps } from "next/app";

import "@navikt/ds-css";
import "@navikt/ds-css-internal";

import "../assets/scss/App.scss";
import "../assets/css/animate.min.css";
import { NextPage } from "next";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
};

export default MyApp;
