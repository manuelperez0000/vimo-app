import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "../../libs/request";
import urlApi from "../../utils/urlApi";
import socket from "../../libs/socket";
import useNotify from "../../libs/notify/notify";
import useAgentChat from "../admin/agentChat/useAgentChat";

const useComercio = () => {

    const { chats, messageOwner, hour, textChat, setTextChat } = useAgentChat()
    const { notify } = useNotify()
    const { depositId } = useParams();
    const [deposit, setDeposit] = useState(null);
    const [remainingTime, setRemainingTime] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [operationNumber, setOperationNumber] = useState("");

    const sendOperationNumber = async () => {
        try {
            console.log("Antes de enviar")
            const response = await request.post(urlApi + `/deposit/operation-number`, {
                depositId,
                operationNumber,
            });
            notify.success("Número de operación enviado con éxito", { type: "success" });
            setShowModal(false);
            console.log("sendOperationNumber response:", response.data);
        } catch (error) {
            console.error("Error sending operation number:", error);
            notify.error("Error al enviar el número de operación", { type: "error" });
        }
    }

    const renderListItem = (label, value) => {
        if (!value) return null;
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <strong>{label}:</strong> {value}
                </div>
                <i className="bi bi-copy copy-icon" onClick={() => navigator.clipboard.writeText(value)} style={{ cursor: 'pointer' }} />
            </li>
        );
    };

    useEffect(() => {
        const fetchDeposit = async () => {
            try {
                const response = await request.get(urlApi + `/deposit/client/${depositId}`);
                console.log("useComercio: ", response.data);
                setDeposit(response.data.body);
            } catch (error) {
                console.error("Error fetching deposit data:", error);
            }
        };
        fetchDeposit();
    }, [depositId]);

    useEffect(() => {
        if (deposit?.createdAt) {
            const interval = setInterval(() => {
                const now = new Date();
                const createdAt = new Date(deposit.createdAt);
                const diff = now - createdAt;
                const remaining = 15 * 60 * 1000 - diff;

                if (remaining > 0) {
                    const minutes = Math.floor((remaining / 1000 / 60) % 60);
                    const seconds = Math.floor((remaining / 1000) % 60);
                    setRemainingTime(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
                } else {
                    setRemainingTime("00:00");
                    clearInterval(interval);
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [deposit]);

    useEffect(() => {
        if (depositId) {
            const handleUpdate = (updatedDeposit) => setDeposit(updatedDeposit);
            socket.on("updateDeposit", handleUpdate);

            return () => {
                socket.off("updateDeposit", handleUpdate);
            };
        }
    }, [depositId]);

    const sendMessage = async (e) => {
        e.preventDefault()
        try {
            const newObjChat = { depositId: deposit._id, from: deposit.userFrom._id, to: deposit?.agent?._id, message: textChat }
            await request.post(urlApi + '/chats', newObjChat)
            setTextChat('')
        } catch (error) {
            console.error(error)
        }
    }

    return {
        deposit,
        remainingTime,
        showModal,
        setShowModal,
        operationNumber,
        setOperationNumber,
        sendOperationNumber,
        renderListItem,
        chats, messageOwner, hour, textChat, setTextChat, sendMessage
    };
};

export default useComercio;
