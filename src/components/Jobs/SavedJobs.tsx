import React from 'react';
import { Knapp } from 'nav-frontend-knapper';

import { useStoreState } from '../../utils/hooks';

import './SavedJobs.css';

// https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-react

type TSavedJobsProps = {
  description: string;
  extent: string;
  name: string;
  applicationDue: string
};

// const SavedJobs: React.FC = () => {
const SavedJobs: React.FC<any> = ({ openModal }: any): any => {
  const jobItems = useStoreState((state) => state.jobs.jobItems);
  return (
    <div>
      {jobItems.length > 0 && (
        <div className="savedJobs">
          {jobItems.map(
            ({
              id, title, description, extent, name, applicationDue,
            }) => (
              <Knapp
                onClick={() => openModal(description, extent, name, applicationDue)}
                className="knapp"
                key={id}
              >
                {title}
              </Knapp>
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default SavedJobs;
