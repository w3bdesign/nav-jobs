import jobModel, { jobItemModel } from './jobs';

export interface StoreModel {
  /**
   * Use the jobItemModel in jobs
   */
  jobs: jobItemModel;
}

const storeModel: StoreModel = {
  /**
   * Use the jobModel properties in jobs
   */
  jobs: jobModel,
};

export default storeModel;
