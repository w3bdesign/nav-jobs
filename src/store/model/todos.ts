/* eslint-disable no-param-reassign */
import { Action, action } from 'easy-peasy';

export interface modalModel {
  /**
   * List of modalItems.
   */
  modalItems: (string | boolean)[][];
  /**
   * Action to add modalitems that we will send to modal
   */
  addModalItems: Action<modalModel, string>;

  /**
   * Action to save and persist modalitems
   */
  saveModalItem: Action<modalModel, string>;
}

const todosModel: modalModel = {
  modalItems: [],
  addModalItems: action((state, payload) => {
    state.modalItems.push([payload, new Date().toLocaleString('no-NO'), false]);
  }),
  saveModalItem: action((state, payload) => {
    state.modalItems.push([payload, new Date().toLocaleString('no-NO'), false]);
  }),
};

export default todosModel;
