import { Link } from "react-router-dom"
import useAuth from "./asets/useAuth"
import LogoBlanco from '../../assets/logoblanco.svg'
const Login = () => {
    const { sendLoginForm } = useAuth()
    return (
        <div className="bg-blue mh-100 flex-center">
            <div className="container-fluid">
                <div className="row pb-5">
                    <div className="col-12 col-sm-10 offset-sm-1 col-md-4 offset-md-4 mt-4">
                        <div className="card p-4">
                            {/* <i className="bi bi-person-circle login-icon" /> */}
                            <img src={LogoBlanco} height={160} alt="Logo PagosYa" />
                            <p className="text-gray-2 mb-2">Login</p>
                            <div>
                                <div className="text-start">
                                    <form onSubmit={sendLoginForm}>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text bg-blue-1 text-white" id="basic-addon1"><i className="bi bi-envelope-fill" /> </span>
                                            <input name="email" defaultValue={'manuelperez.0000@gmail.com'} type="text" className="form-control" placeholder="Ingrese su correo electronico" aria-label="" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text bg-blue-1 text-white" id="basic-addon1"><i className="bi bi-shield-lock-fill" /> </span>
                                            <input name="password" defaultValue={'123456'} type="password" className="form-control" placeholder="Ingrese su contraseña" aria-label="" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="flex-between mb-4">
                                            <div className="flex-center">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Recordarme
                                                    </label>
                                                </div>
                                            </div>
                                            <Link to="/recuperacion">
                                                Olvide mi contraseña
                                            </Link>
                                        </div>
                                        <div className="text-center">
                                            <button className="btn btn-primary">
                                                <div className="mx-5">
                                                    Ingresar
                                                </div>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="mt-3">
                                    ¿Aun no tienes cuenta con nosotros?
                                    <Link to="/registro"> Registrate aqui </Link> es gratis
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >)
}
export default Login