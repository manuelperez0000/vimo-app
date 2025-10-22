import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import request from "../../../libs/request";
import urlApi from "../../../utils/urlApi";
import socket from "../../../libs/socket";
import useApp from "../../../globals/useApp";

const useAgentChat = () => {

    const audio = new Audio('/not.mp3');

    const { user } = useApp()

    const { depositId, type } = useParams()
    const [deposit, setDeposit] = useState(null)
    const [textChat, setTextChat] = useState('')
    const [chats, setChats] = useState([])
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        const fetchDeposit = async () => {
            try {
                const response = await request.get(urlApi + `${type === 'deposit' ? '/deposit/client/' : '/withdrawal/'}${depositId}`);
                const data = response.data.body
                console.log(data)
                setDeposit(data)
                setChats(data?.chats || [])
            } catch (error) {
                console.error("Error fetching deposit data:", error);
            }
        };
        fetchDeposit();
    }, [depositId])

    useEffect(() => {
        if (depositId) {
            const handleUpdate = (updatedDeposit) => setDeposit(updatedDeposit)
            socket.on("updateDeposit", handleUpdate);
            return () => socket.off("updateDeposit", handleUpdate);
        }
    }, [depositId])

    useEffect(() => {
        if (chats) {
            const handleUpdate = (updateChat) => {
                if (updateChat.from !== user?.user?._id) {
                    audio.play()
                }

                setChats(prev => [...prev, updateChat])
            }
            socket.on("chat", handleUpdate);
            return () => socket.off("chat", handleUpdate)
        }
    }, [chats])

    const releaseMoney = async () => {
        try {
            const confirmed = window.confirm("Esta seguro de liberar el dinero?")
            if (confirmed) {
                await request.post(urlApi + '/releaseMoney', { depositId })
            }
        } catch (error) {
            console.error(error)
        }
    }

    const sendMessage = async (e) => {
        e.preventDefault()
        try {
            const newObjChat = { depositId: deposit._id, from: deposit.agent._id, to: deposit.userFrom._id, message: textChat }
            /* setChats([...chats, newObjChat]) */
            setTextChat('')
            await request.post(urlApi + '/chats', newObjChat)
        } catch (error) {
            console.error(error)
        }
    }



    useEffect(() => {
        if (deposit && !deposit?.pagado) {
            const createdAt = new Date(deposit.createdAt).getTime();
            const fifteenMinutes = 15 * 60 * 1000;
            const endTime = createdAt + fifteenMinutes;

            const interval = setInterval(() => {
                const now = new Date().getTime();
                const distance = endTime - now;

                if (distance < 0) {
                    clearInterval(interval);
                    setTimeLeft("Tiempo expirado");
                } else {
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    setTimeLeft(`${minutes}m ${seconds}s`);
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [deposit]);

    const hour = (createdAt) => new Date(createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    const messageOwner = (msg, userId) => msg.from !== userId

    return { messageOwner, deposit, releaseMoney, textChat, sendMessage, setTextChat, hour, chats, timeLeft, setChats }
}

export default useAgentChat
