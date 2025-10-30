import { useEffect } from "react"
import request from "../../libs/request"
import useRetirarStore from './useRetirarStore'
import apiUrl from "../../libs/apiurl"
import useApp from '../../globals/useApp'
import useNotify from "../../libs/notify/notify"
import useErrorManager from "../../libs/useErrorManager"
const useRetirar = () => {

  const {
    setModalManage,
    userMethods, setUserMethods,
    amount, setAmount,
    modal, setModal,
    total, setTotal,
    method, setMethod,
    modalSuccess, setModalSuccess
  } = useRetirarStore()

  const errorManager = useErrorManager()
  const { notify } = useNotify()
  const { user } = useApp()

  const getUserMethods = async () => {
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

      return updatedUserMethods

    } catch (error) {
      console.error("Error fetching user methods:", error)
    }

  }

  useEffect(() => {
    getUserMethods()
  }, [user])

  useEffect(() => {
    getMethod(null)
  }, [])

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
    setModalSuccess,
    setModalManage
  }
}

export default useRetirar
