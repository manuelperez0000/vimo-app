import { createWithEqualityFn } from 'zustand/traditional'

import {data} from './jsonStore.json';

const useRetirarStore = createWithEqualityFn((set) => {
    return data.map(([key, setter, defaultValue]) => ({
        [key]: defaultValue,
        [setter]: (newState) => set(() => ({
            [key]: newState
        }))
    })).reduce((acc, curr) => ({ ...acc, ...curr }), {})
})

export default useRetirarStore