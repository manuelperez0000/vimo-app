import PerfilImage from "../components/perfil-image"
import PerfilCard from "../components/perfilCard"

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mb-2 ">
                    Bienvenido, Manuel Jose Perez
                </div>
            </div>
            <div className="row">
                <div className="col-5">
                    <section>
                        <div className="perfil-saldo">
                            <h5 className="mb-4">
                                Saldo en tu cuenta
                            </h5>
                            <PerfilImage />
                        </div>
                        <h2 className="m-0 p-0">
                            USD 34,57
                        </h2>
                        <p className="mb-4">
                            Disponible
                        </p>
                        <button className="btn btn-secondary"> <i className="bi bi-send mx-1" /> Pagar o enviar </button>
                    </section>

                    <section className="mt-4">
                        <h5 className="mb-4">
                            Movimientos recientes
                        </h5>
                        <p>
                            Consulte el dinero enviado y recibido.
                            Aquí encontrará sus movimientos recientes con PagosYa.
                        </p>

                        <a href=""> <b>Ver todos mis movimientos </b> </a>
                    </section>

                </div>
                <div className="col-7">
                    <section>
                        <h5 className="mb-4">
                            Envio Rapido
                        </h5>
                        <div className="row">
                            <PerfilCard />
                            <PerfilCard />
                            <PerfilCard />
                            <PerfilCard />
                            <PerfilCard />
                            <PerfilCard />
                            <PerfilCard />
                            <PerfilCard />
                        </div>
                    </section>
                </div>
            </div>

           
        </div>
    )
}
export default Home