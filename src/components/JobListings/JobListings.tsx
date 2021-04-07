import React, { useState, useEffect } from 'react';
import Pagination from 'paginering';
import Panel from 'nav-frontend-paneler';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';

import JobModalContent from '../JobModalContent/JobModalContent';
import SavedJobs from '../SavedJobs/SavedJobs';

import { formatDate } from '../../assets/utils/functions';
import { useStoreActions, useStoreState } from '../../assets/utils/hooks';

import styles from './JobListings.module.scss';
import 'react-toastify/dist/ReactToastify.css';

import { IModalContent } from './JobListings.interface';

const JobListings: React.FC = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [modalItems, setModalItems] = useState<IModalContent[]>();
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const jobsPerPage = 10;
  const pagesVisited = pageNumber * jobsPerPage;
  const maxNumberOfPageButtons = 5;

  const jobModalItems = useStoreState((state) => state.jobs.jobModalItems);

  const addJob = useStoreActions((actions) => actions.jobs.addJob);

  const jobExistsToast = () => toast.error('Jobb er allerede lagret ...');

  const jobExists = (search: string) => jobModalItems.findIndex((value) => value.title === search);

  // Changes page to the current page (on click)
  const changePage = (page: number) => {
    setPageNumber(page);
  };

  const handleOpenModalClick = (
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
          Authorization: `Bearer ${process.env.REACT_APP_AUTH}`,
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
      <SavedJobs handleOpenModalClick={handleOpenModalClick} />
      <ToastContainer position="top-center" />
      {error && (
        <span className="errorMessage">
          Feil under lasting av annonser, prøv igjen senere.
        </span>
      )}
      <div id="jobcontainer" className={styles.container}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="title"
        >
          {modalItems && (
            <JobModalContent
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
                <Panel key={uuid} className={styles.panel} border>
                  <span className={`${styles.panelSpan} ${styles.title}`}>
                    {title}
                  </span>
                  <span className={styles.panelSpan}>{name}</span>
                  <span className={styles.panelSpan}>
                    Publisert:
                    {' '}
                    {formatDate(published)}
                  </span>
                  <span className={styles.panelButton}>
                    <Hovedknapp
                      className={styles.hovedKnapp}
                      onClick={() => handleOpenModalClick(
                        description,
                        extent,
                        name,
                        applicationDue,
                      )}
                    >
                      Vis
                    </Hovedknapp>
                    <Knapp
                      className={styles.sekundKnapp}
                      onClick={() => {
                        // Check if we try to add an existing job, if yes, show error message
                        if (jobExists(title) === -1) {
                          addJob({
                            title,
                            description,
                            extent,
                            name,
                            applicationDue,
                          });
                        } else {
                          jobExistsToast();
                        }
                      }}
                    >
                      Lagre
                    </Knapp>
                  </span>
                </Panel>
              ),
            )}
      </div>
      {!loading && (
        <Pagination
          className={styles.pagination}
          currentPage={0}
          numberOfItems={items.length}
          maxPageButtons={maxNumberOfPageButtons}
          itemsPerPage={jobsPerPage}
          onChange={(page) => changePage(page)}
        />
      )}
      {loading && !error && (
        <NavFrontendSpinner className={styles.pagination} />
      )}
    </div>
  );
};

export default JobListings;
