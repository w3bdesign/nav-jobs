import React, { useState, useEffect } from "react";

import Pagination from "rc-pagination";
import { Button, Panel, Loader } from "@navikt/ds-react";

import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";

import JobModalContent from "../JobModalContent/JobModalContent";
import SavedJobs from "../SavedJobs/SavedJobs";

import { formatDate } from "../../assets/utils/functions";
import { useStoreActions, useStoreState } from "../../assets/utils/hooks";
import locale from "../../assets/locale/localenb_NO";

import styles from "./JobListings.module.scss";
import "react-toastify/dist/ReactToastify.css";
import "rc-pagination/assets/index.css";

import { IModalContent } from "./JobListings.interface";

const JobListings: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [modalItems, setModalItems] = useState<IModalContent[]>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const jobsPerPage = 10;
  const pagesVisited = pageNumber * jobsPerPage;

  const remoteError = useStoreState((state) => state.jobs.error);
  const jobItems = useStoreState((state) => state.jobs.jobItems);
  const jobModalItems = useStoreState((state) => state.jobs.jobModalItems);
  const addJob = useStoreActions((actions) => actions.jobs.addJob);

  const fetchRemoteJobs = useStoreActions(
    (actions) => actions.jobs.fetchRemoteJobs
  );

  const jobExistsToast = () => toast.error("Jobb er allerede lagret ...");
  const errorFetchingJobsToast = (errorMessage: string) =>
    toast.error(`Feil ved henting av ekstern data ${errorMessage}`);
  const jobExists = (search: string) =>
    jobModalItems.findIndex((value) => value.title === search);

  // Changes page to the current page (on click)
  const changePage = (page: number) => {
    setPageNumber(page);
  };

  const handleOpenModalClick = (
    description: string,
    extent: string,
    name: string,
    applicationDue: string
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
    if (remoteError.length > 0) {
      errorFetchingJobsToast(remoteError);
    }
  }, [remoteError]);

  useEffect(() => {
    if (modalItems && modalItems[0].name.length) {
      setModalIsOpen(true);
    }
  }, [modalItems]);

  useEffect(() => {
    fetchRemoteJobs();
  }, [fetchRemoteJobs]);

  useEffect(() => {
    if (jobItems.length) {
      Modal.setAppElement("#root");
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [jobItems]);

  return (
    <div>
      <h1 className={styles.header}>NAV Jobb Utforsker</h1>
      <SavedJobs handleOpenModalClick={handleOpenModalClick} />
      <ToastContainer position="top-center" />
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
        {!loading &&
          jobItems
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
                  <span className={styles.panelSpan}>
                    {name.length && name}
                  </span>
                  <span className={styles.panelSpan}>
                    Publisert: {published && formatDate(published)}
                  </span>
                  <span className={styles.panelButton}>
                    <Button
                      className={styles.hovedKnapp}
                      onClick={() =>
                        handleOpenModalClick(
                          description,
                          extent,
                          name,
                          applicationDue
                        )
                      }
                    >
                      Vis
                    </Button>
                    <Button
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
                    </Button>
                  </span>
                </Panel>
              )
            )}
      </div>
      {!loading && (
        <Pagination
          className={styles.pagination}
          current={pageNumber}
          total={jobItems.length - 10}
          pageSize={jobsPerPage}
          locale={locale}
          onChange={(page) => changePage(page)}
        />
      )}
      {loading && !remoteError && (
        <div className={styles.loader}>
          Laster inn data ...
          <br />
          <Loader />
        </div>
      )}
    </div>
  );
};

export default JobListings;
