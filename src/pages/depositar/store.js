
import { createWithEqualityFn } from 'zustand/traditional'

const useMethodStore = createWithEqualityFn((set) => ({
    method: { n: '', v: 0, c: 0, s: '' },
    setMethod: (newMethod) => set(() => ({ method: newMethod })),
    result: 0,
    setResult: (newRes) => set(() => ({ result: newRes })),
    depositModal: false,
    setDepositModal: (newState) => set(() => ({ depositModal: newState })),
    methods: [],
    setMethods: (newMethods) => set(() => ({ methods: newMethods })),
}))

export default useMethodStore