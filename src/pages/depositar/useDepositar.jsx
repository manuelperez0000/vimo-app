import { useEffect, useRef } from "react"
import useMethod from "./store"
import { methods } from "./utils"

const useDepositar = () => {
    const inputRef = useRef(0)

    const { method, setMethod, result, setResult } = useMethod()

    const calcResult = (e) => {
        const res = method.v != 0 ? (e.target.value / method.v).toFixed(2) : 0
        setResult(res)
    }

    const getMethod = (e) => {
        const selectedMethod = JSON.parse(e)
        setMethod(selectedMethod)
    }

    useEffect(() => {
        calcResult({ target: { value: inputRef.current.value } })
    }, [method])

    return {
        method,
        setMethod,
        result,
        setResult,
        calcResult,
        getMethod,
        inputRef,
        methods

    }
}

export default useDepositar