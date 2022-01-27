import Head from "next/head";

import type { NextPage } from "next";

import JobListings from "../components/JobListings/JobListings";
import Navbar from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div id="root">
      <Head>
        <title>NAV Jobb Utforsker</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="NAV Jobb Utforsker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <JobListings />
    </div>
  );
};

export default Home;
