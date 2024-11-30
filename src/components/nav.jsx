import { Link, useLocation  } from "react-router-dom"
import Logo from "./logo"

const Nav = () => {

    const location = useLocation()

    return (
        <nav className="px-5 flex-between">
            <div className="d-flex align-center">
                <Logo />
                <div className="links">
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
                </div>
            </div>
            <div className="r-btns">
                <button className="bell">
                    <i className="bi bi-bell text-light" />
                    <div className="notifications"> 5 </div>
                </button>
                <Link to='/login'>
                    <button className="btn btn-primary"> Login <i className="bi bi-person-circle" />  </button>
                </Link>
            </div>
        </nav>
    )
}

export default Nav