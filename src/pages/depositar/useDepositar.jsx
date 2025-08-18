import { useEffect, useRef } from "react"
import useMethod from "./store"
import { methods } from "./utils"
/* import useLoading from '../../components/loader/useLoading' */
import { useNavigate } from "react-router-dom"
const useDepositar = () => {
    const navigate = useNavigate()
    const inputRef = useRef(0)

    const { method, setMethod, result, setResult, setDepositModal } = useMethod()

    const calcResult = (e) => {
        const res = method.v != 0 ? (e.target.value / method.v) : 0
        setResult(res)
    }

    const getMethod = (e) => {
        const selectedMethod = JSON.parse(e)
        setMethod(selectedMethod)
    }

    const deposit = (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.amount.value)
        setDepositModal(true)
        setTimeout(() => {
            navigate('/comercio')
        }, 2000);
    }

    useEffect(() => {
        calcResult({ target: { value: inputRef.current.value } })
        setDepositModal(false)
    }, [method])

    return {
        method,
        setMethod,
        result,
        setResult,
        calcResult,
        getMethod,
        inputRef,
        methods,
        deposit

    }
}

export default useDepositar