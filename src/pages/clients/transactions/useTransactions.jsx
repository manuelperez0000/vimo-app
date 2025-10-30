import { useEffect } from "react"
import useTransactionsStore from "./useTransactionStore"
import apiUrl from "../../../libs/apiurl"
import request from "../../../libs/request"
const useTransactions = () => {
    const { transactions, setTransactions } = useTransactionsStore()

    const getTransactions = async () => {
        const url = apiUrl + '/transactions'
        const res = await request.get(url)
        setTransactions(res?.data?.body)
    }

    useEffect(() => {
        getTransactions()
    }, [])

    function formatFecha(fecha) {
        const date = new Date(fecha);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses comienzan en 0
        const year = date.getFullYear();
        const hours = date.getHours() % 12 || 12; // Convertir a formato de 12 horas
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const ampm = date.getHours() >= 12 ? 'PM' : 'AM'; // Determinar AM/PM
        return `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
      }

    return {
        transactions,
        formatFecha
    }
}

export default useTransactions