import { createWithEqualityFn } from 'zustand/traditional'

const useRetirarStore = createWithEqualityFn((set) => ({
    userMethods: [],
    setUserMethods: (newState) => set(() => ({
        userMethods: newState
    }))
}))

export default useRetirarStore