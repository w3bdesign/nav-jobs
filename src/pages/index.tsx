import Head from "next/head";

import type { NextPage } from "next";

import JobListings from "../components/JobListings/JobListings";
import Navbar from "../components/Navbar/Navbar";

const Home: NextPage = (): JSX.Element => {
  return (
    <div id="root">
      <Head>
        <title>NAV Jobb Utforsker</title>
      </Head>
      <Navbar />
      <JobListings />
    </div>
  );
};

export default Home;
