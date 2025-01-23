import { useNavigate } from "react-router-dom"
import PerfilImage from "./perfil-image"

const PerfilCard = ({ contacts }) => {
    const navigate = useNavigate()
    console.log(contacts)

    const goEnviarParam = (param) => {
        navigate('/enviar?to=' + param)
    }

    return (<>
        {contacts?.length > 0 && contacts.map((item) => {
            return <div onClick={() => goEnviarParam(item.email)} key={item._id} className="col-3 mb-3">
                <div className="x-center p-2 card fast-send">
                    <PerfilImage />
                    <span className="text-center">
                        {item.name}
                    </span>
                    {/* <small className="text-gray-2">
                        {item.email}
                    </small> */}
                </div>
            </div>

        })}
    </>
    )
}

export default PerfilCard