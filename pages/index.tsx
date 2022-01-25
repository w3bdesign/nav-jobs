import type { NextPage } from "next";

import JobListings from "../components/JobListings/JobListings";
import Navbar from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div id="root">
      <Navbar />
      <JobListings />
    </div>
  );
};

export default Home;
