import { createWithEqualityFn } from 'zustand/traditional'

const useUsersStore = createWithEqualityFn((set) => ({
    users: [],
    setUsers: (newState) => set(() => ({
        users: newState
    }))
}))

export default useUsersStore