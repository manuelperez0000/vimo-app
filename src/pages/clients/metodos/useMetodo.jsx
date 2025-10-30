import { useEffect, useState } from 'react';
import useDepositar from '../../depositar/useDepositar';
import useMetodoStore from './useMetodosStore';
import methodsComponents from '../../../store/methodsComponents.json'
import request from '../../../libs/request';
import urlApi from '../../../utils/urlApi';
import useLoading from '../../../components/loader/useLoading'
import useUserStoreGlobal from '../../../globals/useUserStoreGlobal'

const useMetodo = () => {

    const { user } = useUserStoreGlobal()
    const { setLoading } = useLoading()
    const { methods, getMethod } = useDepositar();
    const { showModal, setShowModal, userMethods, setUserMethods } = useMetodoStore();
    const [selectedMethod, setSelectedMethod] = useState(null)

    const colorBanco = {
        '0102': "rgba(248, 160, 185, 1)",
        '0134': 'rgba(70, 206, 158, 1)',
        '0105': 'rgba(164, 183, 238, 1)'
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const metodo = e.target.method.value != 'none' ? JSON.parse(e.target.method.value) : null
            let auxMetodo = metodo
            //extraer todos los demas datos
            const telefono = e.target?.component_1?.value || null
            const numeroCuenta = e.target?.component_2?.value || null
            const cedula = e.target?.component_3?.value || null
            const tipoCuenta = e.target?.component_4?.value || null
            const nombre = e.target?.component_5?.value || null
            const banco = e.target?.component_6?.value || null
            const email = e.target?.component_7?.value || null

            auxMetodo.phone = telefono
            auxMetodo.acountNumber = numeroCuenta
            auxMetodo.document = cedula
            auxMetodo.tipoCuenta = tipoCuenta
            auxMetodo.nombre = nombre
            auxMetodo.bank = banco
            auxMetodo.email = email

            await request.post(urlApi + '/paymentMethods', auxMetodo)
            getMethods()
            setLoading(false)
            setShowModal(false)
        } catch (error) {
            console.error(error)

        }
    }

    const deleteMethod = async (id) => {
        try {
            const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar el método?`);
            if (confirmDelete) {
                const response = await request.delete(urlApi + '/paymentMethods/' + id)
                console.log(response)
                await getMethods()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getMethods = async () => {
        const userId = user.user._id
        const userMethods = await request.get(urlApi + '/paymentMethods/' + userId)
        setUserMethods(userMethods.data.body)
    }

    useEffect(() => {
        getMethods();
    }, []);

    const handleMethod = (e) => {
        if (e !== 'none') {
            const method = JSON.parse(e)
            const id = method.methodId.methodId
            const components = methodsComponents.methods[id - 1].components
            let auxMethod = method
            auxMethod.components = components
            setSelectedMethod(auxMethod)
        }
    }



    return { deleteMethod, setUserMethods, handleSubmit, userMethods, colorBanco, methods, showModal, setShowModal, selectedMethod, getMethod, handleMethod }

}

export default useMetodo;