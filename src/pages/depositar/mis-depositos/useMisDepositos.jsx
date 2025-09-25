// Custom hook for fetching and managing "Mis Depositos" data

import { useState, useEffect } from 'react';
import request from '../../../libs/request';
import urlApi from '../../../utils/urlApi';

const useMisDepositos = () => {
    const [deposits, setDeposits] = useState([]);


    useEffect(() => {
        const fetchDeposits = async () => {
            try {
                const response = await request.get(urlApi + '/deposit/client');
                console.log(response.data.body);
                setDeposits(response.data.body);
            } catch (err) {
                console.error(err);
            }
        };

        fetchDeposits();
    }, []);

    return { deposits };
};

export default useMisDepositos;
