import { useEffect, useCallback } from "react";
import useStorePayMethods from "./useStorePayMethods";
import request from "../../../libs/request";
import apiUrl from "../../../libs/apiurl";
import useLoading from "../../../components/loader/useLoading";
import { methods } from '../../../store/methodsComponents.json'
import { saveAdminMethod } from "./controller";

const usePayMethods = () => {
    const { setLoading } = useLoading()
    const { payMethods, setPayMethods, setModal, modal, selectedMethod, setSelectedMethod } = useStorePayMethods();

    const getMethod = (id) => methods.find(method => method.id === Number(id))

    const getMethods = useCallback(async () => {
        try {
            const response = await request.get(`${apiUrl}/adminMethods`);
            console.log("Fetched payment methods:", response.data.body);
            setPayMethods(response.data.body);

        } catch (error) {
            console.error("Error fetching payment methods:", error);
        }
    }, [setPayMethods]);

    const saveMethod = async (e) => {
        e.preventDefault()
        setLoading(true)

        const formData = {}
        formData['methodId'] = Number(selectedMethod)
        formData['currencyName'] = getMethod(selectedMethod)?.currencyName
        /* getMethod(selectedMethod)?.components.forEach(component => {
            formData[dictionaryComponets[component - 1]] = e.target[`component-${component}`].value
        }) */
        formData['currencyType'] = getMethod(selectedMethod)?.type
        formData['abbreviation'] = getMethod(selectedMethod)?.abbreviation
        formData['methodId'] = getMethod(selectedMethod)?.id

        const response = await saveAdminMethod(formData)
        await getMethods()

        if (response?.status === 200) {
            alert("Método guardado con éxito")
            e.target.reset()
            setModal(false)
        } else {
            alert("Error al guardar el método")
        }

        setLoading(false)

    }

    const deleteMethod = async (method) => {

        const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar el método ${method.currencyName}?`);
        if (!confirmDelete) return;
        try {
            const response = await request.delete(`${apiUrl}/adminMethods/${method._id}`);
            if (response.data?.status === 200) {
                alert("Método eliminado con éxito");
                await getMethods();
            } else {
                alert("Error al eliminar el método");
            }
        } catch (error) {
            console.error("Error deleting payment method:", error);
        }
    }

    useEffect(() => {
        getMethods();
    }, [getMethods]);

    return {
        payMethods, setPayMethods, getMethods, deleteMethod,
        modal, setModal, selectedMethod, setSelectedMethod, saveMethod, getMethod,
        methods
    };
};

export default usePayMethods;

