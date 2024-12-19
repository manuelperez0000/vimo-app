import { Link } from "react-router-dom"
import LogoSVG from '../assets/logo.svg'
const Home = () => {
    return (
        <div className="bg-blue mh-100 flex-center">
            <div className="text-center">
                <div>
                    <img height={250} src={LogoSVG} alt="" />
                </div>
                <div className="text-light-blue mt-3">
                    Bienvenido a la mejor aplicacion de envio de dinero del mundo
                </div>
                <div className="home-buttons mt-5">
                    <Link to={'/login'}>
                        <button className="btn-home btn-home-1"> <i className="bi bi-person-fill"/> Iniciar sesion</button>
                    </Link>
                    <Link to={'/registro    '}>
                        <button className="btn-home btn-home-2"> <i className="bi bi-list" /> Registrarse</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Home