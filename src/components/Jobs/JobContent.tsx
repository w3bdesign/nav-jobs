/* eslint-disable react/prop-types */
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Hovedknapp } from 'nav-frontend-knapper';

const JobContent: any = ({ closeModal, description }: any) => (
  <div>
    <Hovedknapp onClick={closeModal}>Lukk</Hovedknapp>
    <span>{ReactHtmlParser(description)}</span>
  </div>
);

export default JobContent;
