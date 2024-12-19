
import { createWithEqualityFn } from 'zustand/traditional'

const useUserStorGlobal = createWithEqualityFn((set) => ({
    user: {},
    setUser: (newState) => set(() => ({ user: newState }))
}))

export default useUserStorGlobal