
import { createWithEqualityFn } from 'zustand/traditional'

const useMethod = createWithEqualityFn((set) => ({
    method: { n: '', v: 0, c: 0, s: '' },
    setMethod: (newMethod) => set(() => ({ method: newMethod })),
    result: 0,
    setResult: (newRes) => set(() => ({ result: newRes }))
}))

export default useMethod