
import { createWithEqualityFn } from 'zustand/traditional'

const useAgentStore = createWithEqualityFn((set) => ({
    chats: [],
    setChats: (newState) => set(() => ({ chats: newState })),
}))

export default useAgentStore