import { create } from "zustand"
import { createJobsSlice, IJobsModel } from "./model/jobs"

export interface StoreState {
  jobs: IJobsModel
}

const useStore = create<StoreState>()((set, get, api) => ({
  ...createJobsSlice(set, get, api),
}))

export default useStore
