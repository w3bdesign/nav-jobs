import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Fareknapp } from 'nav-frontend-knapper';

import { formatDate } from '../../utils/functions';

import './JobContent.css';

type TJobContentProps = {
  closeModal: () => void;
  name: string;
  description: string;
  extent: string;
  applicationDue: string;
};

const JobContent = ({
  name,
  description,
  extent,
  applicationDue,
  closeModal,
}: TJobContentProps): JSX.Element => (
  <>
    <Fareknapp onClick={closeModal}>Lukk</Fareknapp>
    <div className="jobDiv">
      <span className="jobContent">
        <span className="jobTitle">
          {name}
          <br />         
          {extent}
          <br />          
          {formatDate(applicationDue)}
        </span>
        <br />
        {ReactHtmlParser(description)}
      </span>
    </div>
  </>
);
export default JobContent;
