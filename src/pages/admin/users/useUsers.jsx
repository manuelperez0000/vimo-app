import { useEffect } from "react";
import urlApi from "../../../utils/urlApi";
import useUsersStore from "./useUsersStore";
import request from "../../../libs/request";
import { useCallback } from "react";
import useNotify from "../../../libs/notify/notify";

const useUsers = () => {

    const { notify } = useNotify();
    const { users, setUsers } = useUsersStore();

    const getUsers = useCallback(async () => {
        const response = await request.get(urlApi + '/users');
        const usersData = response.data.body
        setUsers(usersData);
    }, [setUsers]);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const changeLevel = useCallback(async (level, _id) => {
        try {
            const response = await request.put(urlApi + '/users', { level, _id });
            if (response) {
                getUsers();
            } else {
                alert('Error updating user level');
            }
        } catch (error) {
            notify.error(error.response.data.message)
        }
    }, [getUsers]);

    return {
        users,
        changeLevel
    }
}

export default useUsers