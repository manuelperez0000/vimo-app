import { Link } from "react-router-dom"
import LogoSVG from '../assets/logo-pagos-ya.png'
const Home = () => {
    return (
        <div className="bg-blue mh-100 flex-center">
            <div className="text-center">
                <div className="container-fluid mt-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-4 text-center d-flex justify-content-center">
                            <img className="logo-home" src={LogoSVG} alt="Logo PagosYa" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="text-light-blue mt-3 px-4">
                                Bienvenido a la mejor aplicacion de
                                envio de dinero del mundo
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4">
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
                {/* <div className="home-buttons mt-5">
                    <Link to={'/login'}>
                        <button className="btn-home btn-home-1"> <i className="bi bi-person-fill"/> Iniciar sesion</button>
                    </Link>
                    <Link to={'/registro    '}>
                        <button className="btn-home btn-home-2"> <i className="bi bi-list" /> Registrarse</button>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}
export default Home