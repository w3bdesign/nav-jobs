import React from 'react';
import parse from 'html-react-parser';
import { Fareknapp } from 'nav-frontend-knapper';

import { formatDate } from '../../assets/utils/functions';

import style from './JobModalContent.module.scss';

import { TJobContentProps } from './JobModalContent.type';

function JobModalContent({
  name,
  description,
  extent,
  applicationDue,
  closeModal,
}: TJobContentProps): JSX.Element {
  return (
    <>
      <Fareknapp onClick={closeModal}>Lukk</Fareknapp>
      <div className={style.jobDiv}>
        <span className={style.jobContent}>
          <span className={style.jobTitle}>
            {name}
            <br />
            {extent}
            <br />
            {formatDate(applicationDue)}
          </span>
          <br />
          {parse(description)}
        </span>
      </div>
    </>
  );
}
export default JobModalContent;
