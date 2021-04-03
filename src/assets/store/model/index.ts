import JobModel, { JobsModel } from './jobs';

export interface StoreModel {
  /**
   * Use the JobsModel properties in todos
   */
  jobs: JobsModel;
}

const storeModel: StoreModel = {
  /**
   * Use the JobsModel properties in todos
   */
  jobs: JobModel,
};

export default storeModel;
