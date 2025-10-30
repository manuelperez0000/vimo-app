
import { createWithEqualityFn } from 'zustand/traditional'

const useConfirmStore = createWithEqualityFn((set) => ({
    modalConfirm: false,
    setModalConfirm: (newState) => set(() => ({ modalConfirm: newState })),
    dataModalConfirm: {},
    setDataModalConfirm: (newState) => set(() => ({ dataModalConfirm: newState })),
    checked: false,
    handleCheck: () => set(({ checked }) => ({ checked: !checked }))
}))

export default useConfirmStore