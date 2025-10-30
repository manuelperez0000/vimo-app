//custom hook deposits
import { useEffect, useRef } from 'react';
import socket from '../../../../libs/socket';
import request from '../../../../libs/request'
import apiurl from '../../../../utils/urlApi';
import { useNavigate } from "react-router-dom"
import useDepositsWithdrawalsStore from '../store.js';
import errorManager from '../../../../libs/useErrorManager.jsx';
import useApp from "../../../../globals/useApp";

const useDeposits = () => {
    const { user } = useApp();
    const socketRef = useRef(socket);
    const handleError = errorManager();
    const { deposits, setDeposits, setFilteredDeposits, status, combineOldDeposits, checkBox, setCheckbox, checkBoxBalance, setCheckboxBalance } = useDepositsWithdrawalsStore();
    const navigate = useNavigate();

    const fetchDeposits = async () => {
        try {
            const resultDeposits = await request.get(apiurl + '/deposit')
            setDeposits(resultDeposits.data.body);
            setFilteredDeposits(resultDeposits.data.body);
        } catch (error) {
            handleError(error);
        }

    };

    const handleAtender = async ({ id }) => {
        try {
            await request.put(apiurl + `/deposit/attend/${id}`);
            fetchDeposits();
            //go to agent chat
            navigate('/agent/chat/deposit/' + id);

        } catch (error) {
            handleError(error);
        }
    };

    useEffect(() => {
        if (!socketRef.current) return;

        const handleNewDeposit = (message) => {
            console.log("New deposit received via socket:", message);
            combineOldDeposits(message);
        }

        socketRef.current.on("newDeposit", handleNewDeposit);

        // Limpieza del listener al desmontar
        return () => {
            socketRef.current.off("newDeposit", handleNewDeposit);
        };
    }, []);

    useEffect(() => {
        const checkboxValue = localStorage.getItem('checkbox')
        setCheckbox(checkboxValue === 'true' ? true : false);

        const checkboxBalanceValue = localStorage.getItem('checkboxBalance')
        setCheckboxBalance(checkboxBalanceValue === 'true' ? true : false);

    }, [checkBox, checkBoxBalance]);

    const filteredDeposits = () => {
        if (status === 'all') {
            if (!checkBoxBalance) {
                return deposits.filter(deposit => (checkBox ? user?.methods?.map(m => m.methodId)
                    .includes(deposit.method.methodId) : true));
            } else {
                return deposits.filter(deposit => {
                    const userBalance = user?.user?.balance || 0;
                    return (checkBox ? user?.methods?.map(m => m.methodId)
                        .includes(deposit.method.methodId) : true) &&
                        (userBalance >= deposit.amount);
                });
            }
        } else {
            if (!checkBoxBalance) {
                return deposits
                    .filter(deposit => deposit.status === status &&
                        (checkBox ? user?.methods?.map(m => m.methodId)
                            .includes(deposit.method.methodId) : true));
            } else {
                return deposits
                    .filter(deposit => deposit.status === status &&
                        (checkBox ? user?.methods?.map(m => m.methodId)
                            .includes(deposit.method.methodId) : true) &&
                        (user?.user?.balance >= deposit.amount));
            }
        }
    }

    console.log(filteredDeposits())
    const handleCheck = (e) => {
        localStorage.setItem('checkbox', JSON.stringify(e.target.checked));
        setCheckbox(e.target.checked);
    };

    const handleBalance = (e) => {
        localStorage.setItem('checkboxBalance', JSON.stringify(e.target.checked));
        setCheckboxBalance(e.target.checked);
    }

    return {
        fetchDeposits, filteredDeposits, handleAtender, handleCheck, checkBox, handleBalance,
        checkBoxBalance
    }

    /*  return { fetchDeposits, deposits, setDeposits, handleAtender }; */
};

export default useDeposits;
