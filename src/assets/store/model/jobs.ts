/* eslint-disable no-param-reassign */
import {
  Action, action, thunk, Thunk,
} from 'easy-peasy';

import { v4 as uuidv4 } from 'uuid';

/**
 * Error type
 */

type TError = string

/**
 * Interface for completeTodo with rowIndex: number
 */
interface ICompleteJob {
  rowIndex: number;
}

interface Employer {
  name: string | undefined;
  orgnr: string;
  description: string | null;
  homepage: string | null;
}

/**
 * Interface for jobModalItems
 */
interface IJobItem {
  uuid?: string;
  id: string;
  employer?: Employer | any; // TODO Fix this any type
  published?: Date;
  title: string;
  description: string;
  extent: string;
  name: string;
  applicationDue: string;
}

interface IJobType {
  title: string;
  description: string;
  extent: string;
  name: string;
  applicationDue: string;
}

export interface JobsModel {
  /**
   * Globally stored array of jobItems
   */
  jobItems: IJobItem[];
  /**
   * List of jobModalItems used in modal to show content
   */
  jobModalItems: IJobItem[];

  /**
   * Store error from API fetching in state
   */
  error: TError;

  /**
   * Save error to state
   */
  setError: Action<JobsModel, TError>;

  /**
   * Action to store all jobs from API to state
   */
  saveFetchedJobs: Action<JobsModel, IJobItem[]>;

  /**
   * Thunk to fetch all jobs from API
   */
  fetchRemoteJobs: Thunk<JobsModel>;

  /**
   * Action to add a job to jobModalItems array
   */
  addJob: Action<JobsModel, IJobType>;

  /**
   * Action to delete all jobs from jobModalItems array
   */
  deleteAllJobs: Action<JobsModel>;

  /**
   * Action to delete a single todo from jobModalItems array
   */
  deleteJob: Action<JobsModel, ICompleteJob>;
}

const JobsModel: JobsModel = {
  jobItems: [],
  jobModalItems: [],
  error: '',
  setError: action((state, payload) => {
    state.error = payload;
  }),
  saveFetchedJobs: action((state, payload) => {
    state.jobItems = payload;
  }),
  fetchRemoteJobs: thunk(async (actions) => {
    try {
      // TODO This could be replaced with Axios if wanted
      await fetch(
        'https://arbeidsplassen.nav.no/public-feed/api/v1/ads?size=100&page=1',
        // 'https://arbeidsplassenx.navtet.no/public-feed/api/v1/ads?size=100&page=1', // <- Trigger error handler with this
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AUTH}`,
          },
        },
      ).then((result) => result.json().then((data) => {
        actions.saveFetchedJobs(data.content);
      }));
    } catch (error) {
      actions.setError(error.message);
    }
  }),
  addJob: action(
    (state, {
      title, description, extent, name, applicationDue,
    }) => {
      state.jobModalItems.push({
        id: uuidv4(),
        title,
        description,
        extent,
        name,
        applicationDue,
      });
    },
  ),
  // TODO Delete individual jobs and all saved jobs
  deleteJob: action((state, { rowIndex }) => {
    state.jobModalItems.splice(rowIndex, 1);
  }),
  deleteAllJobs: action((state) => {
    state.jobModalItems.length = 0;
  }),
};

export default JobsModel;
