import { useEffect } from "react"
import PerfilCard from "../../../components/perfilCard"
import useUserStorGlobal from "../../../globals/useUserStoreGlobal"

const EnvioRapido = () => {

    const { user } = useUserStorGlobal()

    return (
        <section>
            <h5 className="mb-4">
                Envio Rapido
            </h5>
            <div className="row">
                <PerfilCard contacts={user.contacts} />

            </div>
        </section>
    )
}

export default EnvioRapido