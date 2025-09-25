//custom hook deposits
import { useEffect } from 'react';
import useStore from './useStore';
import request from '../../../libs/request'
import apiurl from '../../../utils/urlApi';
import { useNavigate } from "react-router-dom"

const useDeposits = () => {

    const { deposits, setDeposits } = useStore();
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
            navigate('/agent/chat/' + id);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchDeposits();
    }, []);

    return { fetchDeposits, deposits, setDeposits,handleAtender };
};

export default useDeposits;
