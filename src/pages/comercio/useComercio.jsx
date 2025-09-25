import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import request from "../../libs/request";
import urlApi from "../../utils/urlApi";
const useComercio = () => {

    const { depositId } = useParams();
    console.log(depositId);
    const [deposit, setDeposit] = useState(null);

    useEffect(() => {
        //fetch deposit data
        const fetchDeposit = async () => {
            try {
                const response = await request.get(urlApi + `/deposit/client/${depositId}`);
                console.log(response.data);
                setDeposit(response.data.body);
            } catch (error) {
                alert("Error fetching deposit data:", error);
            }
        };

        fetchDeposit();
    }, [depositId]);

    return { deposit }
}

export default useComercio