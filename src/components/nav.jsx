import { Link } from "react-router-dom"
import Logo from "./logo"

const Nav = () => {
    return (
        <nav className="px-5">
            <Logo></Logo>
            <div className="links">
                <Link to='/login' className="link">
                    Enviar
                </Link>
                <Link to='/home' className="link">
                    Depositar
                </Link>
                <Link to='/home' className="link" >
                    Retirar
                </Link>
                <Link to='/home' className="link">
                    Movimientos
                </Link>
            </div>
        </nav>
    )
}

export default Nav