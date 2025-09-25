
import { createWithEqualityFn } from 'zustand/traditional'

const useContactsStore = createWithEqualityFn((set) => ({
    deposits: [],
    setDeposits: (newState) => set(() => ({ deposits: newState })),
}))

export default useContactsStore