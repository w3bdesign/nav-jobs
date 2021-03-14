import React, { useState, useEffect } from 'react';
import Pagination from 'paginering'; // https://navikt.github.io/paginering-doc/build/
import Panel from 'nav-frontend-paneler';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { Hovedknapp } from 'nav-frontend-knapper';

import './Jobs.css';

const Jobs: React.FC = () => {
  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const jobsPerPage = 10;
  // Decimal round up for pagecount
  // const pageCount = Math.ceil(items.length / jobsPerPage);

  // Changes page to the current page (on click)
  const changePage = (page: number) => {
    setPageNumber(page);
  };

  useEffect(() => {
    fetch(
      'https://arbeidsplassen.nav.no/public-feed/api/v1/ads?size=100&page=1',
      {
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdWJsaWMudG9rZW4udjFAbmF2Lm5vIiwiYXVkIjoiZmVlZC1hcGktdjEiLCJpc3MiOiJuYXYubm8iLCJpYXQiOjE1NTc0NzM0MjJ9.jNGlLUF9HxoHo5JrQNMkweLj_91bgk97ZebLdfx3_UQ',
        },
      },
    ).then((res) => res.json().then((data) => {
      console.log(data);
      setItems(data.content);
    }));
  }, []);
  // items.length ?

  return (
    <div>
      <div className="container">
        {items.length
          && items.map(({
            uuid, title, employer: { name }, published,
          }) => (
            <Panel key={uuid} className="panel" border>
              <span className="panelSpan">{title}</span>
              <span className="panelSpan">{name}</span>
              <span className="panelSpan">{published}</span>
              <span className="panelButton">
                <Hovedknapp>Vis</Hovedknapp>
                <Hovedknapp>Lagre</Hovedknapp>
              </span>
            </Panel>
          ))}
      </div>
      {items.length && (
        <Pagination
          className="pagination"
          currentPage={1}
          numberOfItems={items.length}
          itemsPerPage={jobsPerPage}
          onChange={(page) => changePage(page)}
        />
      )}
      {!items.length && <NavFrontendSpinner className="pagination" />}
    </div>
  );
};

export default Jobs;
