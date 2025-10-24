//admin template
import nav from './nav.json'
import { Link } from "react-router-dom"
import Logo from "../../components/logo"
import money from '../../libs/money'
import useApp from '../../globals/useApp'
import useDepositsStore from '../comerciantes/atencion/useDepositsStore';

// eslint-disable-next-line react/prop-types
const AdminWraper = ({ children }) => {

    const { deposits } = useDepositsStore();

    const { user } = useApp()
    return (
        <div className="admin-wraper">
            <nav className="px-5 flex-between bg-dark">
                <div className="d-flex align-center">
                    <div className="p-relative">
                        <Logo h={35} type={1} />
                        <div className="text-light text-admin-logo">Admin Panel</div>
                    </div>
                    <div className="links d-none d-sm-none d-md-none d-lg-flex">

                        {nav.map((n, i) => <Link key={i} to={n.path} className={location.pathname === n.path ? "link-active" : "link"}>
                            <i className={n.icon + " mx-1"} />
                            {n.title}
                        </Link>)}

                        {/* Atencion al cliente */}
                        {user?.user?.level == 1 || user?.user?.level == 2 ?
                            <Link to='/atencion' className={location.pathname === '/atencion' ? "link-active bg-success relative px-4" : "px-4 relative bg-success link"}>
                                <i className="bi bi-shop mx-1" />
                                Atencion
                                {deposits?.length > 0 && <div className='punto-rojo' />}
                            </Link> : null}

                        <div className="text-light flex-center px-2 rounded border border-light">
                            ${money(user?.user?.balance)}
                        </div>
                    </div>
                </div>
                <div className="r-btns">
                    <button className="bell">
                        <i className="bi bi-bell text-light" />
                        <div className="notifications"> 5 </div>
                    </button>

                    {/* {getSession ? <>
                        <button onClick={closeSession} className="btn btn-primary">
                            <span className="d-none d-md-inline"> Cerrar Sesion</span>
                            <i className="bi bi-lock-fill" />  </button>
                    </> : <>
                        <Link to='/login'>
                            <button className="btn btn-primary"> Login <i className="bi bi-person-circle" />  </button>
                        </Link>
                    </>} */}
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
                        {/* Atencion al cliente */}
                        {/* {user?.user?.level == + 1 || user?.user?.level == 2 ?
                            <div className="linkMovil bg-success">
                                <Link to='/atencion' className={location.pathname === '/atencion' ? "link-active-movil" : "link-movil"}>
                                    <div className="btn-menu-movil">
                                        <i className="bi bi-credit-card mx-1" />
                                        <div>Atencion</div>
                                    </div>
                                </Link>
                            </div>
                            : null} */}
                    </div>
                </div>
            </nav>
            {children}
        </div>
    )
}

export default AdminWraper