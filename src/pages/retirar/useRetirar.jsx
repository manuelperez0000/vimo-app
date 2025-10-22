import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import request from "../../libs/request"
import useRetirarStore from './useRetirarStore'
import apiUrl from "../../libs/apiurl"
import useApp from '../../globals/useApp'
import useNotify from "../../libs/notify/notify"
import useErrorManager from "../../libs/useErrorManager"
const useRetirar = () => {
  const navigate = useNavigate()
  const errorManager = useErrorManager()
  const { notify } = useNotify()
  const { userMethods, setUserMethods } = useRetirarStore()
  const { user } = useApp()
  const [amount, setAmount] = useState('0.00')
  const [modal, setModal] = useState(false)
  const [total, setTotal] = useState(0)
  const [method, setMethod] = useState({})
  const [modalSuccess, setModalSuccess] = useState(false)

  const getUserMethods = async () => {

    if (user?.methods?.length > 0) {

      try {
        const responseagetAminMethods = await request.get(apiUrl + '/tasas/methods')
        const adminMethods = responseagetAminMethods.data.body
        const userMethods = user?.methods
        const updatedUserMethods = userMethods.map(userMethod => {
          const adminMatch = adminMethods.find(admin => admin.methodId.methodId === userMethod.methodId);
          if (adminMatch) {
            return {
              ...userMethod,
              buy: adminMatch.buy,
              sell: adminMatch.sell,
              tasaId: adminMatch._id
            };
          }
          return userMethod;
        });

        setUserMethods(updatedUserMethods)

      } catch (error) {
        console.error("Error fetching user methods:", error)
      }
    }
  }

  useEffect(() => {
    getUserMethods()
  }, [user])

  useEffect(() => {
    const e = amount ? { target: { amount } } : null
    handleNumberInput(e)
  }, [method])

  const handleNumberInput = (e) => {
    const input = e.target.value
    if (!input) {
      setAmount('0.00')
      setTotal(0)
      return
    }
    const numbers = input.replace(/[^0-9]/g, '')
    if (numbers.length > 12) return
    const numericValue = parseInt(numbers) / 100;
    const formattedValue = new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(numericValue)

    setAmount(formattedValue)
    setTotal(numericValue * method?.buy)
  }

  const handleKeyDown = (e) => {
    // Permitir solo números y teclas de control
    if (!/^\d$/.test(e.key) &&
      !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
      e.preventDefault()
    }
  }



  const getMethod = (e) => {
    const methodObj = e ? JSON.parse(e) : e
    if (methodObj) {
      console.log(methodObj)
      setMethod(methodObj)
    } else {
      setMethod(null)
    }
  }

  const sendWhithdraw = async () => {
    const withdrawAmount = parseFloat(amount.replace(",", "."))

    if (user.user.balance < withdrawAmount) {
      notify.error("Saldo insuficiente")
      return
    }
    try {
      const data = { amount: withdrawAmount, method: method?._id, tasa: method?.tasaId }
      const responseRetirar = await request.post(apiUrl + '/withdrawal', data)
      if (responseRetirar) handleModalSuccess(responseRetirar.data.body)
    } catch (error) {
      errorManager(error)
    }

  }

  const handleModalSuccess = (responseRetirar) => {
    console.log(responseRetirar)
    setModalSuccess(responseRetirar)
  }

  return {
    amount,
    modal,
    setModal,
    handleNumberInput,
    handleKeyDown,
    getUserMethods,
    total,
    method,
    getMethod,
    userMethods,
    sendWhithdraw,
    modalSuccess,
    setModalSuccess
  }
}

export default useRetirar
