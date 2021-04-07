import React from 'react';
import { Knapp } from 'nav-frontend-knapper';

import { useStoreState } from '../../assets/utils/hooks';
import { truncateTextLength } from '../../assets/utils/functions';

import style from './SavedJobs.module.scss';

import { ISavedJobsProps } from './SavedJobs.interface';

const SavedJobs: React.FC<ISavedJobsProps> = ({
  handleOpenModalClick,
}: ISavedJobsProps) => {
  const jobModalItems = useStoreState((state) => state.jobs.jobModalItems);

  return (
    <div>
      {jobModalItems.length > 0 && (
        <>
          <div><h2 className={style.savedJobTitle}>Lagrede jobber: </h2></div>
          <div className={style.savedJobs}>
            {jobModalItems.map(
              ({
                id, title, description, extent, name, applicationDue,
              }) => (
                <Knapp
                  onClick={() => handleOpenModalClick(description, extent, name, applicationDue)}
                  className={style.knapp}
                  key={id}
                >
                  {truncateTextLength(title, 40, ' ... ')}
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
