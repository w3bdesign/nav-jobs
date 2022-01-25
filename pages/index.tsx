import type { NextPage } from "next";

import JobListings from "../components/JobListings/JobListings";

const Home: NextPage = () => {
  return (
    <div id="root">
      <JobListings />
    </div>
  );
};

export default Home;
