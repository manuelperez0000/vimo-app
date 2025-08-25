import { useState } from "react"
import { onlyNumbersRejex } from '../../libs/generalRejex'
import methodsComponents from '../../store/methodsComponents.json'
import apiUrl from "../../libs/apiurl"
import request from "../../libs/request"
import useLoading from "../../components/loader/useLoading.jsx"
import useNotify from "../../libs/notify/notify.jsx"
import useRetirar from "./useRetirar.jsx"
const useModalRetirar = ({ setModal }) => {

    const { notify } = useNotify()
    const { getUserMethods } = useRetirar()
    const [selectedComponent, setSelectedComponent] = useState()
    const [method, setMethod] = useState()
    const [telefono, setTelefono] = useState()
    const { setLoading } = useLoading()

    const selectedMethod = (e) => {
        if (e?.target?.value) {
            const methodSelected = methodsComponents.methods.find(m => m.id === Number(e.target.value))
            setSelectedComponent(methodSelected?.components)
            setMethod(methodSelected)
        } else {
            setSelectedComponent(null)
        }
    }

    const components = methodsComponents.methods.map((m, i) =>
        <option key={i} value={m.id}> {m.currencyName} ({m.abbreviation}) {m.id}</option>
    )

    const sendMethodForm = async (e) => {
        e.preventDefault()
        setModal(false)
        setLoading(true)
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        /* console.log("  data ", data)
        setLoading(false)
        return */
        data.metodo = Number(data.metodo)
        data.exchangeRateToUSD = 0
        data.buyPrice = 0
        data.sellPrice = 0
        //enviar la informacion la backend usando axios
        const url = apiUrl + '/paymentMethods'
        console.log("data:", data)
        try {
            const response = await request.post(url, data)

            await getUserMethods()
            if (response.data) notify.success('Metodo de retiro agregado con exito')

        } catch (error) {
            console.log(error)
            notify.error('Error al agregar el metodo de retiro')
        } finally {
            setLoading(false)
        }
    }

    const handleTelefonoChange = (e) => {
        const input = e.target.value

        if (onlyNumbersRejex.test(input)) {
            setTelefono(input)
        }
    }

    return {
        selectedComponent, setSelectedComponent, telefono, setTelefono,
        selectedMethod, sendMethodForm, handleTelefonoChange, components, method
    }
}


export default useModalRetirar
