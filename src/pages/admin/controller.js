import axios from 'axios'
import apiUrl from '../../libs/apiurl'

export const saveAdminMethod = async ({ name }) => {
    return axios.post(apiUrl + '/paymentMethods', { name })
        .then(response => {
            console.log(response.data)
            alert("success")
        })
        .catch(error => {
            alert("Error")
            console.error(error)
        })
}