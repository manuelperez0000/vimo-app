import { createWithEqualityFn } from 'zustand/traditional'

const useUserStore = createWithEqualityFn((set) => ({
    user: '',
    setUser: (newState) => set(() => ({
        user: newState
    }))
}))

export default useUserStore