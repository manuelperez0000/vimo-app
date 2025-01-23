import { useNavigate } from 'react-router-dom'
import useUserStorrGlobal from './useUserStoreGlobal'
import { useEffect } from 'react'
import useUser from './useUser'

const useApp = () => {

    const { user, setUser } = useUserStorrGlobal()
    const { getUser } = useUser()

    const navigate = useNavigate()

    const initApp = async () => {
        //getUser
        const user = await getUser()
        localStorage.setItem("user", JSON.stringify(user.data.body))
        if (user?.data?.body) {
            setUser(user?.data?.body)
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