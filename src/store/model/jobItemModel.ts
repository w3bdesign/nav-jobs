import { Action, action } from 'easy-peasy';

export interface JobItemModel {
  /**
   * List of modalItems.
   */
  jobItems: (string | boolean)[][];
  /**
   * Action to add modalitems that we will send to modal
   */
  addjobItems: Action<JobItemModel, string>;
}

const jobModel: JobItemModel = {
  jobItems: [],
  addjobItems: action((state, payload) => {
    state.jobItems.push([payload, new Date().toLocaleString('no-NO'), false]);
  }),
};

export default jobModel;
