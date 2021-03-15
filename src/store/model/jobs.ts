import { Action, action } from 'easy-peasy';

export interface jobItemModel {
  /**
   * List of modalItems.
   */
  jobItems: (string | boolean)[][];
  /**
   * Action to add modalitems that we will send to modal
   */
  addjobItems: Action<jobItemModel, string>;
}

const jobModel: jobItemModel = {
  jobItems: [],
  addjobItems: action((state, payload) => {
    state.jobItems.push([payload, new Date().toLocaleString('no-NO'), false]);
  }),
};

export default jobModel;
