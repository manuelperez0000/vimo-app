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
    userMethods:[],
    setUserMethods: (newState) => set(() => ({
        userMethods: newState
    }))
}))

export default useMetodoStore 