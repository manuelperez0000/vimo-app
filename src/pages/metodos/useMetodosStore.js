import { createWithEqualityFn } from 'zustand/traditional'

const useMetodoStore = createWithEqualityFn((set) => ({
    metodo: null,
    setMetodo: (newState) => set(() => ({
        metodo: newState
    })),
    showModal: false,
    setShowModal: (newState) => set(() => ({
        showModal: newState
    })),
}))

export default useMetodoStore 