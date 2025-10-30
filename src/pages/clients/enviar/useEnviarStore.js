
import { createWithEqualityFn } from 'zustand/traditional'

const useEnviarStore = createWithEqualityFn((set) => ({
    modal: false,
    setModal: (newState) => set(() => ({ modal: newState })),
    successModal: false,
    setSuccessModal: (newState) => set(() => ({ successModal: newState })),
    successData:null,
    setSuccessData:(newState) => set(() => ({ successData: newState })),
    

}))

export default useEnviarStore