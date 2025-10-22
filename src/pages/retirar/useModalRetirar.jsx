import { useState, useEffect } from "react"
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
    const { setLoading } = useLoading()
    const [methods, setMethods] = useState([])

    const getWithdrawalMethods = async () => {
        const response = await request.get(apiUrl + '/tasas/methods')
        setMethods(response.data.body)
    }

    useEffect(() => {
        getWithdrawalMethods()
    }, [])

    const selectedMethod = (e) => {
        if (e?.target?.value) {
            const methodId = Number(e.target.value)
            const methodSelected = methods.find(m => m.methodId.id === methodId)
            const methodComponents = methodsComponents.methods.find(m => m.id === methodId)
            setSelectedComponent(methodComponents?.components)
            setMethod(methodSelected.methodId)
        } else {
            setSelectedComponent(null)
        }
    }

    const components = methods.length > 0 && methods.map((tasa, i) => {
        const _method = tasa.methodId
        return <option key={i} value={_method.id}>
            {console.log(_method)}
            {_method.currencyName} ({_method.abbreviation}) - Precio {tasa.buy}{_method.abbreviation} por dolar
        </option>
    })

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

    const generateInputs = () => {
        if (!selectedComponent) return null
        console.log(selectedComponent)
        const inputs = selectedComponent.map(componentId => {
            const component = methodsComponents.components.find(c => c.id === componentId)
            if (!component) return null

            const name = methodsComponents.dictionaryComponets[componentId - 1]
            return (
                <div key={component.id}>
                    <label htmlFor={name}>{component.name}</label>
                    <input
                        type={component.type}
                        name={name}
                        id={name}
                        placeholder={component.name}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
            )
        })
        return inputs
    }
    return {
        selectedComponent, setSelectedComponent,
        selectedMethod, sendMethodForm, components, method,
        generateInputs
    }
}


export default useModalRetirar
