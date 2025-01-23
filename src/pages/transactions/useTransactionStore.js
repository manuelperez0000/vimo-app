
import { createWithEqualityFn } from 'zustand/traditional'

const useTransactionsStore = createWithEqualityFn((set) => ({
    transactions: [],
    setTransactions: (newState) => set(() => ({ transactions: newState })),
}))

export default useTransactionsStore