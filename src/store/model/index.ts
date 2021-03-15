import jobModel, { JobItemModel } from './JobItemModel';

export interface StoreModel {
  /**
   * Use the jobItemModel in jobs
   */
  jobs: JobItemModel;
}

const storeModel: StoreModel = {
  /**
   * Use the jobModel properties in jobs
   */
  jobs: jobModel,
};

export default storeModel;
