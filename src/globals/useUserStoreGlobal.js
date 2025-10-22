
import { createWithEqualityFn } from 'zustand/traditional'

const useUserStorGlobal = createWithEqualityFn((set) => ({
    user: {},
    setUser: (newState) => set(() => ({ user: newState })),
    depositsNumber: 0,
    setDepositsNumber: (newState) => set(() => ({ depositsNumber: newState }))
}))

export default useUserStorGlobal