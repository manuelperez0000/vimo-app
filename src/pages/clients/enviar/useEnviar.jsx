import { useState } from "react"
import useApp from "../../../globals/useApp"
import request from '../../../libs/request.js'
import useErrorManager from "../../../libs/useErrorManager.jsx"
import { handleKeyDown } from "../../../libs/utils.js"
import useLoading from "../../../components/loader/useLoading.jsx"
import useConfirmStore from "./useConfirmStore.js"
import useEnviarStore from "./useEnviarStore.js"
const apiUrl = import.meta.env.VITE_API_URL

const useEnviar = () => {

    const errorManager = useErrorManager()
    const { setSuccessModal, setSuccessData } = useEnviarStore()
    const { setModalConfirm, setDataModalConfirm } = useConfirmStore()
    const { setLoading } = useLoading()
    const [value, setValue] = useState('0,00')
    const [errors, setErrors] = useState(false)
    const { user } = useApp()

    const handleNumberInput = (e) => {

        const input = e.target.value

        if (!input) {
            setValue('0,00')
            return
        }

        setErrors(false)

        const numbers = input.replace(/[^0-9]/g, '')

        if (numbers.length > 8) return

        const numericValue = parseInt(numbers) / 100

        const minMax = { minimumFractionDigits: 2, maximumFractionDigits: 2 }

        const formattedValue = new Intl.NumberFormat('es-ES', minMax).format(numericValue)

        setValue(formattedValue)
    }

    const openConfirmModal = ({ email, amount }) => {
        setModalConfirm(true)
        setDataModalConfirm({ email, amount })
    }

    const confirmar = async (e) => {
        try {
            e.preventDefault()

            setLoading(true)

            let cadena = e.target.amount.value
            cadena = cadena.replace(/\./g, "")
            cadena = cadena.replace(",", ".")
            let amount = parseFloat(cadena)

            const body = {
                amount,
                to: e.target.email.value
            }

            /*  console.log('saldo y to: ', body) */

            if (body.amount <= 0) {
                setErrors({ code: 1, m: "Monto invalido" })
                setLoading(false)
                return
            }

            const url = apiUrl + '/enviar/confirm'

            const response = await request.post(url, body)

            console.log(response.data.body)

            if (response?.data?.body?.confirm) {
                openConfirmModal({ email: body.to, amount })
            }

            setLoading(false)

        } catch (error) {
            setLoading(false)
            errorManager(error)
            /* console.log(error)
            if (error?.response?.data?.message) {
                setErrors({ code: 1, m: error?.response?.data?.message })
            } else {
                errorManager(error)
            } */
        }
    }

    const openSuccessModal = (data) => {
        console.log(data)
        const newData = {
            name: data.info.to.name,
            email: data.to,
            amount: data.amount
        }
        setSuccessModal(true)
        setSuccessData(newData)
    }

    const openFailTransaction = (data) => {
        alert("Operacion fallida")
        console.log(data)
    }

    const enviar = async ({ dataModalConfirm, checked }) => {
        try {
            setLoading(true)
            setModalConfirm(false)
            const url = apiUrl + '/enviar'
            const data = { to: dataModalConfirm.email, amount: dataModalConfirm.amount, checked }

            const response = await request.post(url, data)
            const status = response?.data?.body?.status

            if (status === true) {
                openSuccessModal(response.data.body)
                setLoading(false)
            } else {
                openFailTransaction(response.data.body)
                setLoading(false)
            }



        } catch (error) {
            setLoading(false)
            errorManager(error)
        }
    }

    const [email, setEmail] = useState()

    const constactEmail = (e) => {
        setEmail(e.target.value)
    }

    const saveContact = () => {
        //validar que es un correo valido
    }

    return {
        handleNumberInput,
        user,
        handleKeyDown,
        value,
        confirmar,
        errors,
        constactEmail,
        saveContact,
        enviar,
        email
    }
}

export default useEnviar