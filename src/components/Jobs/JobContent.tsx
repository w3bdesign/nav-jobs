import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Hovedknapp } from 'nav-frontend-knapper';

import { formatDate } from '../../utils/functions';

import './JobContent.css';

type TJobContentProps = {
  closeModal: () => void;
  name: string;
  description: string;
  extent: string;
  applicationDue: string;
};

/*

name : string,
  closeModal: () => void,
  description: string,
  extent: string,
  applicationDue: string,
  */

// eslint-disable-next-line react/prop-types
const JobContent: any = ({
  name, description, extent, applicationDue, closeModal,
}: any): JSX.Element => (

  <>
    <Hovedknapp onClick={closeModal}>Lukk</Hovedknapp>
    <div className="jobDiv">
      <span className="jobContent">
        <span className="jobTitle">
          Arbeidsgiver:
          {' '}
          {name}
          <br />
          Stillingstype:
          {' '}
          {extent}
          <br />
          Frist:
          {' '}
          {formatDate(applicationDue.toString())}
        </span>
        <br />
        {ReactHtmlParser(description.toString())}
      </span>
    </div>
  </>
);
export default JobContent;
