//zustand store for Pay Methods page
import { createWithEqualityFn } from 'zustand/traditional'

const useStorePayMethods = createWithEqualityFn((set) => ({
    payMethods: [],
    setPayMethods: (methods) => set({ payMethods: methods }),
    modal: false,
    setModal: (value) => set({ modal: value }),
    selectedMethod: null,
    setSelectedMethod: (method) => set({ selectedMethod: method }),
}));

export default useStorePayMethods;
