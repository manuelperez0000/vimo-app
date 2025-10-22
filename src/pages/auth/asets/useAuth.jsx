import useAuthStore from "./useAuthStore"
import request from '../../../libs/request.js'
import useNotify from "../../../libs/notify/notify.jsx"
import useErrorManager from "../../../libs/useErrorManager.jsx"
import useLoading from "../../../components/loader/useLoading.jsx"
import { useNavigate } from "react-router-dom"
import useApp from "../../../globals/useApp.jsx"
const apiUrl = import.meta.env.VITE_API_URL

const useAuth = () => {

    const errorManager = useErrorManager()

    const { setUser } = useApp()

    const navigate = useNavigate()

    const { setLoading } = useLoading()
    const { notify } = useNotify()
    const { passError, setPassError } = useAuthStore()

    const registerFormSubmit = async (e) => {
        e.preventDefault()
        const targets = e.target
        const formParams = {
            name: targets.name.value,
            ci: targets.ci.value,
            phone: targets.phone.value,
            email: targets.email.value,
            password: targets.password.value,
            repitPassword: targets.repitPassword.value
        }

        if (formParams.password != formParams.repitPassword) return setPassError("Las contraseñas no coinciden")
        setPassError(false)

        setLoading(true)

        try {
            const body = formParams
            const url = apiUrl + '/user/register'
            const response = await request.post(url, body)
            if (response) notify.success('Registrado con exito')
            setLoading(false)
            navigate('/login')
        } catch (error) {
            setLoading(false)
            errorManager(error)
        }

    }

    const sendLoginForm = async (e) => {
        e.preventDefault()
        const targets = e.target
        const formParams = {
            email: targets.email.value,
            password: targets.password.value
        }

        setLoading(true)

        try {
            const url = apiUrl + '/user/login'
            const response = await request.post(url, formParams)
            setLoading(false)
            if (response) notify.success('Logueado con exito')
            const localData = response.data.body
            localStorage.setItem('user', JSON.stringify(localData))
            setUser(localData)
            navigate('/dashboard')
        } catch (error) {
            setLoading(false)
            //console.log(error.message)
            errorManager(error)
        }

    }

    return {
        registerFormSubmit,
        passError,
        sendLoginForm
    }
}

export default useAuth