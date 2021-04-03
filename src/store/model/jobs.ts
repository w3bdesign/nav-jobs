/* eslint-disable no-param-reassign */
import { Action, action } from 'easy-peasy';

/**
 * Interface for completeTodo with rowIndex: number
 */
interface ICompleteJob {
  rowIndex: number;
}

export interface JobsModel {
  /**
   * List of jobItems.
   */
  jobItems: (string | boolean)[][];
  /**
   * Action to add a todo to jobItems array
   */
  addJob: Action<JobsModel, string>;
  /**
   * Action to delete all todos from jobItems array
   */
  deleteAllJobs: Action<JobsModel>;
  /**
   * Action to delete a single todo from jobItems array
   */
  deleteJob: Action<JobsModel, ICompleteJob>;
}

const JobsModel: JobsModel = {
  jobItems: [['Test', new Date().toLocaleString('no-NO'), false]],
  addJob: action((state, payload) => {
    state.jobItems.push([payload, new Date().toLocaleString('no-NO'), false]);
  }),
  deleteJob: action((state, { rowIndex }) => {
    state.jobItems.splice(rowIndex, 1);
  }),
  deleteAllJobs: action((state) => {
    state.jobItems.length = 0;
  }),
};

export default JobsModel;
