import { Link } from "react-router-dom"
import LogoSVG from '../assets/logo-pagos-ya.png'
const Home = () => {
    return (
        <div className="bg-blue mh-100 p-2 w-100 flex-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mt-5 text-center">
                        <img className="logo-home" src={LogoSVG} alt="Logo PagosYa" />
                        <div className="col-12 text-light text-center mt-2">
                            Envía, ahorra y protege ya
                        </div>
                        <div className="row mt-4">

                            <div className="col-6 col-md-6">
                                <Link to={'/login'}>
                                    <button className="btn-home btn-home-1"> <i className="bi bi-person-fill" /> Iniciar sesion</button>
                                </Link>
                            </div>
                            <div className="col-6 col-md-6">
                                <Link to={'/registro'}>
                                    <button className="btn-home btn-home-2"> <i className="bi bi-list" /> Registrarse</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home