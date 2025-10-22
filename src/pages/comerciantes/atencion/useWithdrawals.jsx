//custom hook withdrawals
import { useEffect, useRef, useState } from 'react';
import socket from '../../../libs/socket';
import request from '../../../libs/request'
import apiurl from '../../../utils/urlApi';
import { useNavigate } from "react-router-dom"
import useErrorManager from '../../../libs/useErrorManager'
const useWithdrawals = () => {

    const errorManager = useErrorManager()

    const socketRef = useRef(socket);
    const [withdrawals, setWithdrawals] = useState([])
    const navigate = useNavigate();

    const fetchWithdrawals = async () => {
        const resultWithdrawals = await request.get(apiurl + '/withdrawal/pending')
        setWithdrawals(resultWithdrawals.data.body);
    };

    const handleAtender = async (id) => {
        try {
            await request.put(apiurl + `/withdrawal/attend/${id}`);
            fetchWithdrawals();
            //go to agent chat
            navigate('/agent/chat/withdrawal/' + id);

        } catch (error) {
            errorManager(error);
        }
    };

    useEffect(() => {
        if (!socketRef.current) return;

        console.log('Retiros actuales:', withdrawals);

        // Obtener retiros iniciales
        fetchWithdrawals();

        // Listener seguro para nuevos retiros
        const handleNewWithdrawal = (message) => {
            console.log("mensaje del socket: ", message)
            setWithdrawals((prevWithdrawals) => [...prevWithdrawals, message]);
        };

        socketRef.current.on("newWithdrawal", handleNewWithdrawal);

        // Limpieza del listener al desmontar
        return () => {
            /* socketRef.current.off("newWithdrawal", handleNewWithdrawal); */
        };
    }, []);

    return { fetchWithdrawals, withdrawals, setWithdrawals, handleAtender };
};

export default useWithdrawals;
