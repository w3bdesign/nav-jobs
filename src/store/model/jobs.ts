/* eslint-disable no-param-reassign */
import { Action, action } from 'easy-peasy';

import { v4 as uuidv4 } from 'uuid';

/**
 * Interface for completeTodo with rowIndex: number
 */
interface ICompleteJob {
  rowIndex: number;
}

/**
 * Interface for jobItems
 */
interface IJobItem {
  id: string;
  title: string;
  description: string;
  extent: string;
  name: string;
  applicationDue: string;
}

export interface JobsModel {
  /**
   * List of jobItems.
   */
  jobItems: IJobItem[];

  /**
   * Action to add a job to jobItems array
   */
  // addJob: Action<JobsModel, string>;
  addJob: Action<JobsModel, any>;
  /**
   * Action to delete all jobs from jobItems array
   */
  deleteAllJobs: Action<JobsModel>;
  /**
   * Action to delete a single todo from jobItems array
   */
  deleteJob: Action<JobsModel, ICompleteJob>;
}

const JobsModel: JobsModel = {
  jobItems: [],
  // addJob: action((state, payload) => {
  addJob: action((state, {
    title, description, extent, name, applicationDue,
  }) => {
    // state.jobItems.push({ id: uuidv4(), title: payload });
    state.jobItems.push({
      id: uuidv4(), title, description, extent, name, applicationDue,
    });

    // description, extent, name, applicationDue
  }),
  deleteJob: action((state, { rowIndex }) => {
    state.jobItems.splice(rowIndex, 1);
  }),
  deleteAllJobs: action((state) => {
    state.jobItems.length = 0;
  }),
};

export default JobsModel;
