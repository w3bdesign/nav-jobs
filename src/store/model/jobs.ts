import { StateCreator } from "zustand"
import { v4 as uuidv4 } from "uuid"
import { StoreState } from "../index"

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
  setError: (error: TError) => void

  /**
   * Action to store all jobs from API to state
   */
  saveFetchedJobs: (jobs: IJobItem[]) => void

  /**
   * Action to add a job to jobModalItems array
   */
  addJob: (job: IJobType) => void

  /**
   * Action to delete all jobs from jobModalItems array
   */
  deleteAllJobs: () => void

  /**
   * Action to delete a single job from jobModalItems array
   */
  deleteJob: (payload: ICompleteJob) => void
}

export const createJobsSlice: StateCreator<
  StoreState,
  [],
  [],
  { jobs: IJobsModel }
> = (set) => ({
  jobs: {
    jobItems: [],
    jobModalItems: [],
    error: "",
    setError: (error: TError) =>
      set((state) => ({
        jobs: {
          ...state.jobs,
          error,
        },
      })),
    saveFetchedJobs: (jobs: IJobItem[]) =>
      set((state) => ({
        jobs: {
          ...state.jobs,
          jobItems: jobs,
        },
      })),
    addJob: ({ title, description, extent, name, applicationDue }: IJobType) =>
      set((state) => ({
        jobs: {
          ...state.jobs,
          jobModalItems: [
            ...state.jobs.jobModalItems,
            {
              id: uuidv4(),
              title,
              description,
              extent,
              name,
              applicationDue,
            },
          ],
        },
      })),
    deleteJob: ({ rowIndex }: ICompleteJob) =>
      set((state) => ({
        jobs: {
          ...state.jobs,
          jobModalItems: state.jobs.jobModalItems.filter(
            (_, index) => index !== rowIndex,
          ),
        },
      })),
    deleteAllJobs: () =>
      set((state) => ({
        jobs: {
          ...state.jobs,
          jobModalItems: [],
        },
      })),
  },
})
