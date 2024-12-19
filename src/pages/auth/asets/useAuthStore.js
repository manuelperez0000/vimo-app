
import { createWithEqualityFn } from 'zustand/traditional'

const useAuthStore = createWithEqualityFn((set) => ({
    passError:false,
    setPassError: (newPassError) => set(() => ({ passError: newPassError }))
}))

export default useAuthStore