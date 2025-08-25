import { Link } from "react-router-dom"
import PerfilImage from "../../components/perfil-image"
/* import PerfilCard from "../../components/perfilCard" */
import useApp from "../../globals/useApp"
import money from "../../libs/money"
import EnvioRapido from "./envioRapido/envioRapido"

const Dashboard = () => {

    const { user } = useApp()

    if (Object.keys(user).length > 0) return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mb-2 ">
                    Bienvenido, {user.user.name}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 mb-2">
                    <section className="mb-2">
                        <div className="perfil-saldo">
                            <h5 className="mb-4">
                                Saldo en tu cuenta
                            </h5>
                            <PerfilImage />
                        </div>
                        <h2 className="m-0 p-0">
                            USD {money(user.user.balance)}{/* 34,57 */}
                        </h2>
                        <p className="mb-4">
                            Disponible
                        </p>
                        <Link to="/enviar">
                            <button className="btn btn-primary"> <i className="bi bi-send mx-1" /> Pagar o enviar </button>
                        </Link>
                    </section>

                    <section className="">
                        <h5 className="mb-4">
                            Movimientos recientes
                        </h5>
                        <p>
                            Consulte el dinero enviado y recibido.
                            Aquí encontrará sus movimientos recientes con PagosYa.
                        </p>

                        <Link to="/movimientos"> <b>Ver todos mis movimientos </b> </Link>
                    </section>

                </div>
                <div className="col-12 col-md-6">
                    <EnvioRapido />
                </div>
            </div>
        </div>
    )
}
export default Dashboard