import apiUrl from '../../../libs/apiurl'
import request from '../../../libs/request'

export const saveAdminMethod = async (formData) => {

    try {
        const response = await request.post(apiUrl + '/adminMethods/saveAdminMethod', formData)
        return response.data
    } catch (error) {
        console.error(error)
    } finally {
        //any finally code
    }
}