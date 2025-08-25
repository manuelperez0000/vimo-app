import { useEffect, useState } from "react"
import request from "../../libs/request"
import useRetirarStore from './useRetirarStore'
import apiUrl from "../../libs/apiurl"

const useRetirar = () => {

  const { setUserMethods } = useRetirarStore()

  const [value, setValue] = useState('0.00')
  const [modal, setModal] = useState(false)
  
  const getUserMethods = async () => {
    try {
      const response = await request.get(apiUrl + '/user/getUser')
      setUserMethods(response.data.body.methods)
    } catch (error) {
      console.error("Error fetching user methods:", error)
    }
  }

  useEffect(() => {
    getUserMethods()
  }, [])

  const handleNumberInput = (e) => {
    const input = e.target.value
    if (!input) {
      setValue('0.00')
      return
    }
    const numbers = input.replace(/[^0-9]/g, '')
    if (numbers.length > 8) return
    const numericValue = parseInt(numbers) / 100;
    const formattedValue = new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(numericValue)

    setValue(formattedValue)
  }

  const handleKeyDown = (e) => {
    // Permitir solo números y teclas de control
    if (!/^\d$/.test(e.key) &&
      !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
      e.preventDefault()
    }
  }

  return {
    value,
    modal,
    setModal,
    handleNumberInput,
    handleKeyDown,
    getUserMethods
  }
}

export default useRetirar