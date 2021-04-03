import React from 'react';
import { Knapp } from 'nav-frontend-knapper';

import { useStoreState } from '../../utils/hooks';

import './SavedJobs.css';

// https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-react

const SavedJobs: React.FC = () => {
  const jobItems = useStoreState((state) => state.jobs.jobItems);
  return (
    <div>
      {jobItems.length > 0 && (
        <div className="savedJobs">
          {jobItems.map(({ id, title }) => (
            <Knapp className="knapp" key={id}>{title}</Knapp>
          ))}
        </div>
      )}
    </div>
  );
};
export default SavedJobs;
