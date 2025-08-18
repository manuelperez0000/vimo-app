import { Link } from "react-router-dom"
import useAuth from "./asets/useAuth"
import LogoBlanco from '../../assets/logoblanco.svg'
import { useEffect, useState } from "react"
const Login = () => {
    const { sendLoginForm } = useAuth()

    const [eye, setEye] = useState(false)
    const [remember, setRemember] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        getUserLoginPreference()
    }, [])

    const getUserLoginPreference = () => {

        const eye = localStorage.getItem('eye')
        eye === 'true' ? setEye(true) : setEye(false)

        const remember = localStorage.getItem('remember')
        remember === 'true' ? setRemember(true) : setRemember(false)

        const email_ = localStorage.getItem('email')
        email_ && remember === 'true' && setEmail(email_)

        const password_ = localStorage.getItem('password')
        password_ && remember === 'true' && setPassword(password_)

        remember === 'false' && (localStorage.removeItem('email'), localStorage.removeItem('password'))

    }

    const handleEye = () => {
        if (eye) {
            setEye(false)
            localStorage.setItem('eye', 'false')
        } else {
            setEye(true)
            localStorage.setItem('eye', 'true')
        }
    }

    const handleRemember = () => {
        if (remember) {
            setRemember(false)
            localStorage.setItem('remember', 'false')
        } else {
            setRemember(true)
            localStorage.setItem('remember', 'true')
        }
    }

    const handleEmail = (e) => {
        localStorage.setItem('email', e.target.value)
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        localStorage.setItem('password', e.target.value)
        setPassword(e.target.value)
    }

    const handleCheckedRemember = (e) => {
        const checked = e.target.checked
        setRemember(checked)
    }

    return (
        <div className="bg-blue mh-100 flex-center">
            <div className="container-fluid">
                <div className="row pb-5">
                    <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                        <div className="card p-4">
                            {/* <i className="bi bi-person-circle login-icon" /> */}
                            <img src={LogoBlanco} height={160} alt="Logo PagosYa" />
                            <p className="text-gray-2 mb-2">Login</p>
                            <div>
                                <div className="text-start">
                                    <form onSubmit={sendLoginForm}>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text bg-blue-1 text-white" id="basic-addon1"><i className="bi bi-envelope-fill" /> </span>

                                            <input
                                                onChange={handleEmail}
                                                name="email"
                                                defaultValue={email}
                                                type="text"
                                                className="form-control"
                                                placeholder="Ingrese su correo electronico"
                                                aria-label=""
                                                aria-describedby="basic-addon1" />
                                        </div>

                                        <div className="input-group mb-3">

                                            <span onClick={handleEye} className="input-group-text bg-blue-1 text-white" id="basic-addon1"><i className={eye ? "bi bi-eye-fill" : "bi bi-eye-slash-fill"} /> </span>

                                            <input
                                                onChange={handlePassword}
                                                name="password"
                                                defaultValue={password}
                                                type={eye ? "text" : "password"}
                                                className="form-control"
                                                placeholder="Ingrese su contraseña"
                                                aria-label=""
                                                aria-describedby="basic-addon1" />
                                        </div>

                                        <div className="flex-between mb-4">
                                            <div className="flex-center">
                                                <div className="form-check">

                                                    <input onClick={handleRemember} className="form-check-input" type="checkbox" onChange={handleCheckedRemember} checked={remember} id="flexCheckDefault" />
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