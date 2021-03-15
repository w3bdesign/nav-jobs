import React, { useState, useEffect } from 'react';
import Pagination from 'paginering'; // https://navikt.github.io/paginering-doc/build/
import Panel from 'nav-frontend-paneler';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { Hovedknapp } from 'nav-frontend-knapper';
import Modal from 'react-modal';

import JobContent from './JobContent';

import { formatDate } from '../../utils/functions';

import './Jobs.css';

interface IModalContent {
  description: string;
  extent: string;
  name: string;
  applicationDue: string;
}

const Jobs: React.FC = () => {
  const [items, setItems] = useState([]);
  const [modalItems, setModalItems] = useState<IModalContent[]>();
  const [pageNumber, setPageNumber] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);

  // Decimal round up for pagecount
  // const pageCount = Math.ceil(items.length / jobsPerPage);

  const jobsPerPage = 10;
  const pagesVisited = pageNumber * jobsPerPage;

  // Changes page to the current page (on click)
  const changePage = (page: number) => {
    setPageNumber(page);
  };

  const openModal = (
    description: never,
    extent: never,
    name: never,
    applicationDue: never,
  ) => {
    setModalItems([
      {
        description,
        name,
        extent,
        applicationDue,
      }]);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (modalItems && modalItems[0].name.length) {
      // setTimeout(() => setIsOpen(true), 500);
      setIsOpen(true);
    }
  }, [modalItems]);

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
      setItems(data.content);
      Modal.setAppElement('#root');
    }));
  }, []);

  return (
    <div>
      <div id="jobcontainer" className="container">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="title"
        >
          {modalItems && (
            <JobContent
              name={modalItems[0].name}
              description={modalItems[0].description}
              extent={modalItems[0].extent}
              applicationDue={modalItems[0].applicationDue}
              closeModal={closeModal}
            />
          )}
        </Modal>
        {items.length
          && items
            .slice(pagesVisited, pagesVisited + jobsPerPage)
            .map(
              ({
                uuid,
                title,
                employer: { name },
                published,
                description,
                extent,
                applicationDue,
              }) => (
                <Panel key={uuid} className="panel" border>
                  <span className="panelSpan">{title}</span>
                  <span className="panelSpan">{name}</span>
                  <span className="panelSpan">{formatDate(published)}</span>
                  <span className="panelButton">
                    <Hovedknapp
                      onClick={() => openModal(description, extent, name, applicationDue)}
                    >
                      Vis
                    </Hovedknapp>
                    <Hovedknapp>Lagre</Hovedknapp>
                  </span>
                </Panel>
              ),
            )}
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
