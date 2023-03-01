import { Action, action } from "easy-peasy"

import { v4 as uuidv4 } from "uuid"

/**
 * Error type
 */

type TError = string

/**
 * Interface for completeJob with rowIndex: number
 */
interface ICompleteJob {
  rowIndex: number
}

/**
 * Type for employer
 */
type Employer = {
  name: string
}

/**
 * Interface for jobModalItems
 */
interface IJobModalItem {
  uuid?: string
  id: string
  published?: Date
  title: string
  description: string
  extent: string
  name: string
  applicationDue: string
}

/**
 * Interface for jobItems
 */
interface IJobItem {
  uuid?: string
  id: string
  employer: Employer
  published?: Date
  title: string
  description: string
  extent: string
  name: string
  applicationDue: string
}

interface IJobType {
  title: string
  description: string
  extent: string
  name: string
  applicationDue: string
}

export interface IJobsModel {
  /**
   * Globally stored array of jobItems
   */
  jobItems: IJobItem[]
  /**
   * List of jobModalItems used in modal to show content
   */
  jobModalItems: IJobModalItem[]

  /**
   * Store error from API fetching in state
   */
  error: TError

  /**
   * Save error to state
   */
  setError: Action<IJobsModel, TError>

  /**
   * Action to store all jobs from API to state
   */
  saveFetchedJobs: Action<IJobsModel, IJobItem[]>

  /**
   * Action to add a job to jobModalItems array
   */
  addJob: Action<IJobsModel, IJobType>

  /**
   * Action to delete all jobs from jobModalItems array
   */
  deleteAllJobs: Action<IJobsModel>

  /**
   * Action to delete a single job from jobModalItems array
   */
  deleteJob: Action<IJobsModel, ICompleteJob>
}

const JobModel: IJobsModel = {
  jobItems: [],
  jobModalItems: [],
  error: "",
  setError: action((state, payload) => {
    state.error = payload
  }),
  saveFetchedJobs: action((state, payload) => {
    state.jobItems = payload
  }),
  addJob: action((state, { title, description, extent, name, applicationDue }) => {
    state.jobModalItems.push({
      id: uuidv4(),
      title,
      description,
      extent,
      name,
      applicationDue,
    })
  }),
  // Should also be able to delete individual jobs and all saved jobs
  deleteJob: action((state, { rowIndex }) => {
    state.jobModalItems.splice(rowIndex, 1)
  }),
  deleteAllJobs: action((state) => {
    state.jobModalItems.length = 0
  }),
}

export default JobModel
