import { useEffect } from 'react';
import useDepositar from '../depositar/useDepositar';
import useMetodoStore from './useMetodosStore';
import usePayMethods from '../admin/paymethods/usePayMethods';
const useMetodo = () => {

    const { selectedMethod } = usePayMethods()
    const { methods, getDepositMethods, getMethod } = useDepositar();
    const { showModal, setShowModal } = useMetodoStore();

    useEffect(() => {
        getDepositMethods();
    }, []);

    const nuevoMetodo = () => {
        /* setShowModal(true); */
        alert()
    };

    const handleAddMetodo = (metodo) => {
        // Aquí puedes agregar la lógica para agregar un nuevo método a través de una API si es necesario
        console.log('Nuevo método agregado:', metodo);
        setShowModal(false);
    };
    return { methods, showModal, setShowModal, nuevoMetodo, selectedMethod, handleAddMetodo, getMethod };
};
export default useMetodo;