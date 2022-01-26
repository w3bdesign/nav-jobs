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
      </Head>
      <Navbar />
      <JobListings />
    </div>
  );
};

export default Home;
