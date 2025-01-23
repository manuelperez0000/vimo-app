import request from "../libs/request"
import apiurl from "../libs/apiurl"
const useUser = () => {

    const getUser = async () => {
        const res = await request.get(apiurl + "/user/getUser")
        /* console.log("User: ",res.data) */
        return res
    }

    return {
        getUser
    }
}

export default useUser