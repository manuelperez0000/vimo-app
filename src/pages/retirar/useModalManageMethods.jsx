import { useState, useEffect } from "react"
import methodsComponents from '../../store/methodsComponents.json'
import apiUrl from "../../libs/apiurl"
import request from "../../libs/request"
import useLoading from "../../components/loader/useLoading.jsx"
import useNotify from "../../libs/notify/notify.jsx"
import useRetirar from "./useRetirar.jsx"
import useErrorManager from "../../libs/useErrorManager.jsx"
import useApp from "../../globals/useApp.jsx"

const useModalManageMethods = ({ setModal, editableMethod, setEditableMethod }) => {
    const { getUserMethods } = useRetirar()
    const handleError = useErrorManager()
    const { notify } = useNotify()
    const [selectedComponent, setSelectedComponent] = useState()
    const [method, setMethod] = useState()
    const { setLoading } = useLoading()
    const { initApp } = useApp()
    const [methods, setMethods] = useState([])
    const [formValues, setFormValues] = useState({})

    const getWithdrawalMethods = async () => {
        const response = await request.get(apiUrl + '/tasas/methods')
        setMethods(response.data.body)
    }

    useEffect(() => {
        getWithdrawalMethods()
    }, [])

    useEffect(() => {
        if (editableMethod) {
            // Pre-fill for editing
            const methodId = editableMethod.methodId
            const typeMethod = methods.find(m => m.methodId.methodId === methodId)
            const meth = methodsComponents.methods.find(m => m.id === methodId)
            setSelectedComponent(meth?.components)
            setMethod(typeMethod?.methodId)

            // Populate form values
            setFormValues({
                email: editableMethod.email || '',
                numero_de_telefono: editableMethod.phone || '',
                numero_de_cuenta: editableMethod.accountNumber || '',
                tipo_de_cuenta: editableMethod.accountType || '',
                banco: editableMethod.bank || '',
                walletAddress: editableMethod.walletAddress || '',
                cedula_de_identidad: editableMethod.document || '',
                nombre_del_titular: editableMethod.userName || ''
            })
        } else {
            setFormValues({})
        }
    }, [editableMethod, methods])

    const selectedMethod = (e) => {
        if (e?.target?.value) {
            const methodId = Number(e.target.value)
            const methodSelected = methods.find(m => m.methodId.methodId === methodId)
            const methodComponents = methodsComponents.methods.find(m => m.id === methodId)
            setSelectedComponent(methodComponents?.components)
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

    const sendMethodUpdateForm = async (e) => {
        e.preventDefault()
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
            bank: e.target.banco?.value || null,
            walletAddress: e.target.walletAddress?.value || null,
            document: e.target.cedula_de_identidad?.value || null,
            userName: e.target.nombre_del_titular?.value || null
        }

        const url = apiUrl + '/paymentMethods/' + editableMethod._id
        setModal(false)
        setEditableMethod(null)
        setLoading(true)

        try {
            const response = await request.put(url, data)
            if (response.data) notify.success('Metodo de retiro actualizado con exito')
            await initApp()
            /* await getUserMethods() */
        } catch (error) {
            console.log(error)
            handleError(error, 'Error al intentar actualizar el metodo de pago')
        } finally {
            setLoading(false)
        }
    }

    const deleteMethod = async (methodId) => {
        if (!confirm('¿Estas seguro de eliminar este metodo de pago?')) return

        setLoading(true)
        const url = apiUrl + '/paymentMethods/' + methodId
        try {
            await request.delete(url)
            notify.success('Metodo de retiro eliminado con exito')
            await initApp()
           /*  await getUserMethods() */
        } catch (error) {
            handleError(error, 'Error al eliminar el metodo de pago')
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
            let defaultValue = editableMethod ? editableMethod[name] : ''
            return (
                <div key={component.id}>
                    <label htmlFor={name}>{component.name}</label>
                    <input
                        type={component.type}
                        name={name}
                        id={name}
                        placeholder={component.name}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        defaultValue={defaultValue}
                    />
                </div>
            )
        })
        return inputs
    }

    return {
        selectedComponent, setSelectedComponent,
        selectedMethod, sendMethodUpdateForm, components, method,
        generateInputs, deleteMethod, formValues, setFormValues
    }
}

export default useModalManageMethods
