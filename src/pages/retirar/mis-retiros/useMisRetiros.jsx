import { useState, useEffect } from 'react';
import request from '../../../libs/request';
import urlApi from '../../../utils/urlApi';

const useMisRetiros = () => {
    const [withdrawals, setWithdrawals] = useState([]);

    useEffect(() => {
        const fetchWithdrawals = async () => {
            try {
                const response = await request.get(urlApi + '/withdrawal');
                setWithdrawals(response.data.body);
            } catch (err) {
                console.error(err);
            }
        };

        fetchWithdrawals();
    }, []);

    return { withdrawals };
};

export default useMisRetiros;
