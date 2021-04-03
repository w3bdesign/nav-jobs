import React from 'react';

import { useStoreState } from '../../utils/hooks';

import './SavedJobs.css';

// https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-react

const SavedJobs: React.FC = () => {
  const jobItems = useStoreState((state) => state.jobs.jobItems);
  return (
    <div>
      <div className="savedJobs">
        {jobItems.length > 0
          && jobItems.map(({ id, title }) => <div key={id}>{title}</div>)}
      </div>
    </div>
  );
};
export default SavedJobs;
