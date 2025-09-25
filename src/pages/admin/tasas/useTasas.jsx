import { useEffect, useState } from "react";
import urlApi from '../../../utils/urlApi.js'
import request from '../../../libs/request.js'
import useLoading from "../../../components/loader/useLoading.jsx";
const useTasas = () => {
  
    const [tasas, setTasas] = useState([]);
    const [editedTasas, setEditedTasas] = useState([]);

    const { loading, setLoading } = useLoading();
    const [modalVisible, setModalVisible] = useState(false);

    const modalTasa = () => {
        setModalVisible(!modalVisible);
    }

    const getTasas = async () => {
        setLoading(true);
        const response = await request.get(`${urlApi}/tasas`);
        const tasasWithPrices = response.data.body

        const methods = await request.get(`${urlApi}/adminMethods`);

        const methodsData = methods.data.body;

        const mergedTasas = methodsData.map(method => {

            const tasa = tasasWithPrices.find(t => t.methodId === method._id);
            return {
                ...method,
                buy: tasa ? tasa.buy : 0,
                sell: tasa ? tasa.sell : 0
            };
        });

        setTasas(mergedTasas);
        setEditedTasas(mergedTasas);

        setLoading(false);
    };

    useEffect(() => {
        getTasas();
    }, []);

    const sendForm = async (tasa) => {
        const data = {
            buy: parseFloat(tasa.buy),
            sell: parseFloat(tasa.sell),
            methodId: tasa._id,
            name: tasa.currencyName,
        }
        setLoading(true); 
        await request.post(`${urlApi}/tasas`, data);
        
        setLoading(false);
    };

    const editTasas = (index, field, value) => {
        const updatedTasas = [...editedTasas];
        updatedTasas[index] = {
            ...updatedTasas[index],
            [field]: value
        };
        setEditedTasas(updatedTasas);
    };

    return { tasas, editedTasas, setEditedTasas, sendForm, loading, modalTasa, modalVisible, setModalVisible, editTasas };
}

export default useTasas;