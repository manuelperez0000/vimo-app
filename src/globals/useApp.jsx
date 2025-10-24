import { useNavigate } from 'react-router-dom'
import useUserStorrGlobal from './useUserStoreGlobal'
import useUser from './useUser'
import { useEffect } from 'react'
import request from '../libs/request'
import apiurl from '../utils/urlApi'
import socket from '../libs/socket'

const useApp = () => {

    const { user, setUser, depositsNumber, setDepositsNumber } = useUserStorrGlobal()
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

    const getPendingDeposits = async () => {
        try {
            const response = await request.get(apiurl + '/deposit/pending')
            setDepositsNumber(response.data.body.length)
        } catch (error) {
            console.error("Error fetching pending deposits:", error)
        }
    }

    useEffect(() => {
        getPendingDeposits()
    }, [])

    useEffect(() => {
        if (user && Object.keys(user).length > 0) {
            const handleUpdate = (userUpdated) => {

                console.log("info del user por webSocket: ", userUpdated)
                const { from, to } = userUpdated

                console.log("user; ", user)
                if (from._id === user.user._id) {
                    setUser({ ...user, user: from })
                }
                if (to._id === user.user._id) {
                    setUser({ ...user, user: to })
                }
            }
            socket.on("userData", handleUpdate);
            //return () => socket.off("userData", handleUpdate);
        }
    }, [user])

    const getSession = () => JSON.parse(localStorage.getItem('user')) ? true : false

    return {
        initApp,
        user,
        closeSession,
        getSession,
        setUser,
        depositsNumber,
        setDepositsNumber
    }
}

export default useApp
