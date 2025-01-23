
import { createWithEqualityFn } from 'zustand/traditional'

const useContactsStore = createWithEqualityFn((set) => ({
    modalContact: false,
    setModalContact: (newState) => set(() => ({ modalContact: newState })),
}))

export default useContactsStore