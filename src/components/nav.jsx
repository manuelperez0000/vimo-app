import { Link, useLocation } from "react-router-dom"
import Logo from "./logo"
import useApp from "../globals/useApp"
import money from "../libs/money"
const Nav = () => {

    const { getSession, closeSession, depositsNumber, user } = useApp()
    const location = useLocation()

    return (
        <nav className="px-5 flex-between">
            <div className="d-flex align-center">
                <Logo h={35} type={1} />
                <div className="links d-none d-sm-none d-md-none d-lg-flex">
                    <Link to='/enviar' className={location.pathname === '/enviar' ? "link-active" : "link"}>
                        <i className="bi bi-send mx-1" />
                        Enviar
                    </Link>
                    <Link to='/depositar' className={location.pathname === '/depositar' ? "link-active" : "link"}>
                        <i className="bi bi-credit-card mx-1" />
                        Depositar
                    </Link>
                    <Link to='/retirar' className={location.pathname === '/retirar' ? "link-active" : "link"} >
                        <i className="bi bi-bank mx-1" />
                        Retirar
                    </Link>
                    <Link to='/movimientos' className={location.pathname === '/movimientos' ? "link-active" : "link"}>
                        <i className="bi bi-card-list mx-1" />
                        Movimientos
                    </Link>
                    <Link to='/metodos-de-pago' className={location.pathname === '/metodos-de-pago' ? "link-active" : "link"}>
                        <i className="bi bi-wallet2 mx-1" />
                        Métodos de Pago
                    </Link>

                    
                </div>
            </div>
            <div className="r-btns">

                <div className="text-light px-2 rounded border border-light">
                    ${money(user.user.balance)}
                </div>

                <button className="bell">
                    <i className="bi bi-bell text-light" />
                    {depositsNumber > 0 && <div className="notifications"> {depositsNumber}</div>}
                </button>


                {getSession ? <>
                    <button onClick={closeSession} className="btn btn-primary">
                        <span className="d-none d-md-inline"> Cerrar Sesion</span>
                        <i className="bi bi-lock-fill" />  </button>
                </> : <>
                    <Link to='/login'>
                        <button className="btn btn-primary"> Login <i className="bi bi-person-circle" />  </button>
                    </Link>
                </>}
            </div>
            <div className="movilNav d-md-flex d-lg-none">
                <div className="links2 flex-between w-100">

                    <div className="linkMovil">
                        <Link to='/enviar' className={location.pathname === '/enviar' ? "link-active-movil" : "link-movil"}>
                            <div className="btn-menu-movil">
                                <i className="bi bi-send mx-1" />
                                <div>Enviar</div>
                            </div>
                        </Link>
                    </div>

                    <div className="linkMovil">
                        <Link to='/depositar' className={location.pathname === '/depositar' ? "link-active-movil" : "link-movil"}>
                            <div className="btn-menu-movil">
                                <i className="bi bi-credit-card mx-1" />
                                <div>Depositar</div>
                            </div>
                        </Link>
                    </div>

                    <div className="linkMovil">
                        <Link to='/retirar' className={location.pathname === '/retirar' ? "link-active-movil" : "link-movil"}>
                            <div className="btn-menu-movil">
                                <i className="bi bi-credit-card mx-1" />
                                <div>Retirar</div>
                            </div>
                        </Link>
                    </div>

                    <div className="linkMovil">
                        <Link to='/movimientos' className={location.pathname === '/movimientos' ? "link-active-movil" : "link-movil"}>
                            <div className="btn-menu-movil">
                                <i className="bi bi-credit-card mx-1" />
                                <div>Movimientos</div>
                            </div>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}

export default Nav