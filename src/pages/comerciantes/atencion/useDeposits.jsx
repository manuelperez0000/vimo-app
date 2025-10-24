//custom hook deposits
import { useEffect, useRef } from 'react';
import socket from '../../../libs/socket';
import request from '../../../libs/request'
import apiurl from '../../../utils/urlApi';
import { useNavigate } from "react-router-dom"
import useContactsStore from "./useDepositsStore";

const useDeposits = () => {

    const socketRef = useRef(socket);
    const { deposits, setDeposits } = useContactsStore();
    const navigate = useNavigate();

    const fetchDeposits = async () => {
        const resultDeposits = await request.get(apiurl + '/deposit/pending')
        setDeposits(resultDeposits.data.body);
    };

    const handleAtender = async (id) => {
        try {
            await request.put(apiurl + `/deposit/attend/${id}`);
            fetchDeposits();
            //go to agent chat
            navigate('/agent/chat/deposit/' + id);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (!socketRef.current) return;

        console.log('Depósitos actuales:', deposits);

        // Obtener depósitos iniciales
        fetchDeposits();

        // Listener seguro para nuevos depósitos
        const handleNewDeposit = (message) => {
            console.log("mensaje del socket: ", message)
            setDeposits((prevDeposits) => [...prevDeposits, message]);
        };

        socketRef.current.on("newDeposit", handleNewDeposit);

        // Limpieza del listener al desmontar
        return () => {
            socketRef.current.off("newDeposit", handleNewDeposit);
        };
    }, []);

    return { fetchDeposits, deposits, setDeposits, handleAtender };
};

export default useDeposits;
