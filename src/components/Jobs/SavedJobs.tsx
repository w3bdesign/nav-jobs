import React from 'react';
import { Knapp } from 'nav-frontend-knapper';

import { useStoreState } from '../../utils/hooks';

import './SavedJobs.css';

// https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-react

interface ISavedJobsProps {
  openModal(
    description: string,
    extent: string,
    name: string,
    applicationDue: string
  ): void;
}

const SavedJobs: React.FC<ISavedJobsProps> = ({
  openModal,
}: ISavedJobsProps) => {
  const jobItems = useStoreState((state) => state.jobs.jobItems);
  return (
    <div>
      {jobItems.length > 0 && (
        <>
          <div><h2 className="savedJobTitle">Lagrede jobber: </h2></div>
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
        </>
      )}
    </div>
  );
};

export default SavedJobs;
