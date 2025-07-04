import { useNavigate } from "react-router-dom"
import PerfilImage from "./perfil-image"
import request from "../libs/request"
import apiUrl from "../libs/apiurl"

const PerfilCard = ({ contacts }) => {
    const navigate = useNavigate()
    console.log(contacts)

    const goEnviarParam = (param) => {
        navigate('/enviar?to=' + param)
    }

    const deleteContact = async ({ _id }) => {
        const response = await request.post(apiUrl + "/perfil/deleteUser", { _id })
        console.log(response.data)
    }

    return (<>
        {contacts?.length > 0 && contacts.map((item) => {
            return <div key={item._id} className="col-3 text-center">
                <div onClick={() => goEnviarParam(item.email)} className="x-center p-2 card fast-send">
                    <PerfilImage />
                    <span className="text-center">
                        {item.name}
                    </span>
                    {/* <small className="text-gray-2">
                        {item.email}
                        </small> */}
                </div>
                <button onClick={() => deleteContact({ _id: item._id })} className="btn-delete-contact">Eliminar Contacto</button>
            </div>

        })}
    </>
    )
}

export default PerfilCard