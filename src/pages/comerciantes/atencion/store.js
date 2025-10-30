
import { createWithEqualityFn } from 'zustand/traditional'

const useDepositsWithdrawalsStore = createWithEqualityFn((set) => ({
    deposits: [],
    setDeposits: (newState) => set(() => ({ deposits: newState })),
    combineOldDeposits: (newDeposits) =>
        set((state) => ({ deposits: [...state.deposits, newDeposits] })),
    filteredDeposits: [],
    setFilteredDeposits: (newState) => set(() => ({ filteredDeposits: newState })),
    withdrawals: [],
    setWithdrawals: (newState) => set(() => ({ withdrawals: newState })),
    filteredWithdrawals: [],
    setFilteredWithdrawals: (newState) => set(() => ({ filteredWithdrawals: newState })),
    status: 'pending',
    setStatus: (newState) => set(() => ({ status: newState })),
    checkBox:true,
    setCheckbox: (newState) => set(() => ({ checkBox: newState })),
    checkBoxBalance:true,
    setCheckboxBalance: (newState) => set(() => ({ checkBoxBalance: newState })),
}))

export default useDepositsWithdrawalsStore