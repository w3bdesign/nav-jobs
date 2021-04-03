import React, { useState, useEffect } from 'react';
import Pagination from 'paginering';
import Panel from 'nav-frontend-paneler';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import Modal from 'react-modal';

// import { useStoreActions } from 'easy-peasy';

import JobContent from './JobContent';

import { formatDate } from '../../utils/functions';
import { useStoreActions } from '../../utils/hooks';

import './Jobs.css';

interface IModalContent {
  description: string;
  extent: string;
  name: string;
  applicationDue: string;
}

const Jobs: React.FC = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [modalItems, setModalItems] = useState<IModalContent[]>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  // Decimal round up for pagecount
  // const pageCount = Math.ceil(items.length / jobsPerPage);

  const jobsPerPage = 10;
  const pagesVisited = pageNumber * jobsPerPage;

  // const addJob = useStoreActions((actions) => actions.jobs.addjobItems);
  // const addJob = useStoreActions(({ addjobItems }) => addjobItems);

  const addTodo = useStoreActions((actions) => actions.jobs.addJob);

  // Changes page to the current page (on click)
  const changePage = (page: number) => {
    setPageNumber(page);
  };

  const openModal = (
    description: string,
    extent: string,
    name: string,
    applicationDue: string,
  ) => {
    setModalItems([
      {
        description,
        name,
        extent,
        applicationDue,
      },
    ]);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (modalItems && modalItems[0].name.length) {
      setModalIsOpen(true);
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
    )
      .then((result) => result.json().then((data) => {
        setItems(data.content);
        Modal.setAppElement('#root');
        setLoading(false);
      }))
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <div>
      {error && (
        <span className="errorMessage">
          Feil under lasting av annonser, prøv igjen senere.
        </span>
      )}
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
        {!loading
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
                  <span className="panelSpan title">{title}</span>
                  <span className="panelSpan">{name}</span>
                  <span className="panelSpan">
                    Publisert:
                    {' '}
                    {formatDate(published)}
                  </span>
                  <span className="panelButton">
                    <Hovedknapp
                      className="hovedKnapp"
                      onClick={() => openModal(description, extent, name, applicationDue)}
                    >
                      Vis
                    </Hovedknapp>
                    <Knapp className="sekundKnapp" onClick={() => addTodo(title)}>
                      Lagre
                    </Knapp>
                  </span>
                </Panel>
              ),
            )}
      </div>
      {!loading && (
        <Pagination
          className="pagination"
          currentPage={1}
          numberOfItems={items.length}
          itemsPerPage={jobsPerPage}
          onChange={(page) => changePage(page)}
        />
      )}
      {loading && !error && <NavFrontendSpinner className="pagination" />}
    </div>
  );
};

export default Jobs;
