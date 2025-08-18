import { Link, useLocation } from "react-router-dom"
import Logo from "./logo"
import useApp from "../globals/useApp"
import useUserStorGlobal from "../globals/useUserStoreGlobal"
const Nav = () => {

    const { user } = useUserStorGlobal()
    const { getSession, closeSession } = useApp()
    const location = useLocation()

    return (
        <nav className="px-5 flex-between">
            <div className="d-flex align-center">
                <Logo h={35} type={1} />
                <div className="links d-none d-md-flex">
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

                    {/* Atencion al cliente */}
                    {user?.user?.level == 1 || user?.user?.level == 2 ?
                        <Link to='/atencion' className={location.pathname === '/atencion' ? "link-active bg-success" : "bg-success link"}>
                            <i className="bi bi-shop mx-1" />
                            Atencion
                        </Link> : null}
                </div>
            </div>
            <div className="r-btns">
                <button className="bell">
                    <i className="bi bi-bell text-light" />
                    <div className="notifications"> 5 </div>
                </button>

                {getSession ? <>
                    <button onClick={closeSession} className="btn btn-primary"> Cerrar Sesion <i className="bi bi-lock-fill" />  </button>
                </> : <>
                    <Link to='/login'>
                        <button className="btn btn-primary"> Login <i className="bi bi-person-circle" />  </button>
                    </Link>
                </>}
            </div>
            <div className="movilNav d-flex d-md-none">
                <div className="links">
                    <div className="linkMovil">
                        <Link to='/enviar' className={location.pathname === '/enviar' ? "link-active-movil" : "link"}>
                            <div className="btn-movil">
                            <i className="bi bi-send mx-1" />
                            <div>
                                Enviar
                            </div>
                            </div>
                        </Link>
                    </div>
                    <div className="linkMovil">
                        <Link to='/depositar' className={location.pathname === '/depositar' ? "link-active" : "link"}>
                            <i className="bi bi-credit-card mx-1" />
                            Depositar
                        </Link>
                    </div>
                    <div className="linkMovil">
                        <Link to='/retirar' className={location.pathname === '/retirar' ? "link-active" : "link"} >
                            <i className="bi bi-bank mx-1" />
                            Retirar
                        </Link>
                    </div>
                    <div className="linkMovil">
                        <Link to='/movimientos' className={location.pathname === '/movimientos' ? "link-active" : "link"}>
                            <i className="bi bi-card-list mx-1" />
                            Movimientos
                        </Link>
                    </div>

                    {/* Atencion al cliente */}
                    {user?.user?.level == 1 || user?.user?.level == 2 ?
                        <Link to='/atencion' className={location.pathname === '/atencion' ? "link-active bg-success" : "bg-success link"}>
                            <i className="bi bi-shop mx-1" />
                            Atencion
                        </Link> : null}
                </div>
            </div>
        </nav>
    )
}

export default Nav