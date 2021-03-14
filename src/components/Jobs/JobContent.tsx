import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Hovedknapp } from 'nav-frontend-knapper';

import './JobContent.css';

type JobContentProps = {
  closeModal: () => void;
  description: string;
  name: string;
  extent: string;
  applicationDue: string;
};

const JobContent = ({
  closeModal,
  description,
  name,
  extent,
  applicationDue,
}: JobContentProps): JSX.Element => (
  <>
    <Hovedknapp onClick={closeModal}>Lukk</Hovedknapp>
    <div className="jobDiv">
      <span className="jobContent">
        <span className="jobTitle">
          {name}
          <br />
          {extent}
          <br />
          {applicationDue}
        </span>
        <br />
        {ReactHtmlParser(description)}
      </span>
    </div>
  </>
);

export default JobContent;
