import useStore, { StoreState } from "@/store/index"

// Export hooks that maintain the same API as Easy Peasy for backward compatibility
export const useStoreState = <T>(selector: (state: StoreState) => T): T => {
  return useStore(selector)
}

export const useStoreActions = <T>(selector: (state: StoreState) => T): T => {
  return useStore(selector)
}

// Not used in Zustand but kept for compatibility
export const useStoreDispatch = () => {
  return useStore
}
