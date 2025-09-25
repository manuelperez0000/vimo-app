import { useEffect, useRef } from "react"
import useMethodStore from "./store"
/* import useLoading from '../../components/loader/useLoading' */
import { useNavigate } from "react-router-dom"
import request from '../../libs/request'
import urlApi from '../../utils/urlApi.js'
const useDepositar = () => {
    const navigate = useNavigate()
    const inputRef = useRef(0)

    const { method, setMethod, result, setResult, setDepositModal, methods, setMethods } = useMethodStore()

    const calcResult = (e) => {
        const res = method.sell != 0 ? (Number(e.target.value) / method.sell) : 0
        setResult(res)
    }

    const getMethod = async (methodObject) => {
        if (methodObject !== 'none') {
            setMethod(JSON.parse(methodObject))
        } else {
            setMethod(null)
        }
        setResult(0)
    }

    const deposit = async (e) => {
        e.preventDefault()
        const form = e.target
        if (form.method.value === 'none') {
            return alert('Seleccione un metodo de deposito')
        }
        if (form.amount.value <= 0) {
            return alert('Ingrese un monto valido')
        }

        const data = {
            method: JSON.parse(form.method.value),
            amount: form.amount.value,
            result: form.result.value,
            tasa: method._id
        }

        try {
            const response = await request.post(urlApi + '/deposit', data)
            console.log(response)
            setDepositModal(true)
            setTimeout(() => {
                navigate('/comercio/'+response.data.body._id)
            }, 2000);
        } catch (error) {
            console.log(error)
        }


    }

    const getDepositMethods = async () => {
        const response = await request.get(urlApi + '/tasas/methods')
        setMethods(response.data.body)
    }

    useEffect(()=>{
        getDepositMethods()
    },[])

    return {
        method,
        setMethod,
        result,
        setResult,
        calcResult,
        getMethod,
        inputRef,
        deposit,
        methods,
        getDepositMethods
    }
}

export default useDepositar
