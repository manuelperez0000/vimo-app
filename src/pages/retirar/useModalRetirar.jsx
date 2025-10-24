import { useState, useEffect } from "react"
import methodsComponents from '../../store/methodsComponents.json'
import apiUrl from "../../libs/apiurl"
import request from "../../libs/request"
import useLoading from "../../components/loader/useLoading.jsx"
import useNotify from "../../libs/notify/notify.jsx"
import useRetirar from "./useRetirar.jsx"
import useErrorManager from "../../libs/useErrorManager.jsx"

const useModalRetirar = ({ setModal }) => {
    const handleError = useErrorManager()
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

            console.log(methodId)

            const methodSelected = methods.find(m => m.methodId.methodId === methodId)
            const methodComponents = methodsComponents.methods.find(m => m.id === methodId)
            setSelectedComponent(methodComponents?.components)
            console.log("components seleccionados ", methodComponents?.components)
            setMethod(methodSelected?.methodId)

        } else {
            setSelectedComponent(null)
        }
    }

    const components = methods.length > 0 && methods.map((tasa, i) => {
        const _method = tasa.methodId
        return <option key={i} value={_method?.methodId}>
            {_method?.currencyName} ({_method?.abbreviation}) - Precio {tasa.buy}{_method?.abbreviation} por dolar
        </option>
    })

    const sendMethodForm = async (e) => {
        e.preventDefault()


        console.log("Metodo a enviar:", method)

        const data = {
            methodId: {
                methodId: method?.methodId,
                currencyName: method?.currencyName || null,
                currencyType: method?.currencyType || null,
                abbreviation: method?.abbreviation || null

            },
            _id: method?._id,
            email: e.target.email?.value || null,
            phone: e.target.numero_de_telefono?.value || null,
            accountNumber: e.target.numero_de_cuenta?.value || null,
            accountType: e.target.tipo_de_cuenta?.value || null,
            bankName: e.target.banco?.value || null,
            walletAddress: e.target.walletAddress?.value || null,
            document: e.target.cedula_de_identidad?.value || null,
            userName: e.target.nombre_del_titular?.value || null
        }

        console.log("Data a enviar:", data)
        const url = apiUrl + '/paymentMethods'
        setModal(false)
        setLoading(true)

        try {
            const response = await request.post(url, data)

            await getUserMethods()
            if (response.data) notify.success('Metodo de retiro agregado con exito')

        } catch (error) {
            console.log(error)
            handleError(error, 'Error al intentar guardar el metodo de pago')
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
