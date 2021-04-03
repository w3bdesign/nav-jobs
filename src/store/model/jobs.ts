/* eslint-disable no-param-reassign */
import { Action, action } from 'easy-peasy';

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
  id: number;
  title: string;
}

export interface JobsModel {
  /**
   * List of jobItems.
   */
  jobItems: IJobItem[];
  /**
   * Action to add a job to jobItems array
   */
  addJob: Action<JobsModel, string>;
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
  addJob: action((state, payload) => {
    state.jobItems.push({ id: 0, title: payload });
  }),
  deleteJob: action((state, { rowIndex }) => {
    state.jobItems.splice(rowIndex, 1);
  }),
  deleteAllJobs: action((state) => {
    state.jobItems.length = 0;
  }),
};

export default JobsModel;
