import { createWithEqualityFn } from 'zustand/traditional'

const useLoading = createWithEqualityFn((set) => ({
    loading: false,
    setLoading: (newState) => set(() => ({ loading: newState }))
}))

export default useLoading