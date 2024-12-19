import { useNavigate } from 'react-router-dom'
import useUserStorrGlobal from './useUserStoreGlobal'
const useApp = () => {

    const { user, setUser } = useUserStorrGlobal()

    const navigate = useNavigate()

    const initApp = () => {
        const localUser = JSON.parse(localStorage.getItem('user'))
        if (localUser) {
            setUser(localUser)
            
        }
    }

    const closeSession = () => {
        localStorage.removeItem('user')
        navigate('/')
    }

    const getSession = () => JSON.parse(localStorage.getItem('user')) ? true : false



    return {
        initApp,
        user,
        closeSession,
        getSession,
        setUser
    }
}

export default useApp