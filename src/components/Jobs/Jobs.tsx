import React from 'react';

import Pagination from 'paginering';

const Jobs: React.FC = () => (
  <div>
    Jobber! Bla bla
    <br />
    <Pagination
      currentPage={1}
      numberOfItems={50}
      itemsPerPage={10}
      onChange={(page) => console.log(`Changed to page ${page}`)}
    />

  </div>
);

export default Jobs;
