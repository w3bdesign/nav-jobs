import JobModel, { IJobsModel } from './jobs'

export interface StoreModel {
  /**
   * Use the IJobsModel properties in jobs
   */
  jobs: IJobsModel
}

const storeModel: StoreModel = {
  jobs: JobModel,
}

export default storeModel
