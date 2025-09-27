import { useEffect, useRef } from "react"
import useMethodStore from "./store"
import components from '../../store/methodsComponents.json'
import { useNavigate } from "react-router-dom"
import request from '../../libs/request'
import urlApi from '../../utils/urlApi.js'
import socket from '../../libs/socket';

const useDepositar = () => {
    const navigate = useNavigate()
    const inputRef = useRef(0)
     const socketRef = useRef(socket);

    const { method, setMethod, result, setResult, setDepositModal, methods, setMethods } = useMethodStore()

    const calcResult = (e) => {
        const res = method.sell != 0 ? (Number(e.target.value) / method.sell) : 0
        setResult(res)
    }

    const getMethod = async (methodObject) => {
        if (methodObject !== 'none') {
            const objMethod = JSON.parse(methodObject)
            const id = objMethod.methodId.methodId
            const componentes = components.methods[id - 1].components
            let merged = objMethod
            merged.componets = componentes
            setMethod(merged)
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
            socketRef.current.emit("newDeposit", data);
            setTimeout(() => {
                setDepositModal(false)
                navigate('/comercio/' + response.data.body._id)
            }, 2000);
        } catch (error) {
            console.log(error)
        }


    }

    const getDepositMethods = async () => {
        const response = await request.get(urlApi + '/tasas/methods')
        setMethods(response.data.body)
    }

    useEffect(() => {
        getDepositMethods()
    }, [])

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
