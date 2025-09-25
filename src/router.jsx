import { Routes, Route } from "react-router-dom"
import Login from "./pages/auth/login"
import Registro from "./pages/auth/registro"
import Recuperacion from "./pages/auth/recuperacion"
import Home from "./pages/home"
import Enviar from "./pages/enviar/enviar"
import Depositar from "./pages/depositar/depositar"
import Movimientos from "./pages/transactions/transactions.jsx"
import Retirar from "./pages/retirar/retirar"
import Dashboard from "./pages/dashboard/dashboard.jsx"
import Wraper from "./components/wraper"
import Comercio from "./pages/comercio/comercio"
import Atencion from "./pages/comerciantes/atencion/atencion.jsx"
import MisDepositos from "./pages/depositar/mis-depositos/misDepositos.jsx"

import AdminWraper from "./pages/admin/adminWraper.jsx"
import Tasas from "./pages/admin/tasas/tasas.jsx"
import Transacciones from "./pages/admin/Transacciones.jsx"
import Usuarios from "./pages/admin/users/Usuarios.jsx"
import Depositos from "./pages/admin/Depositos.jsx"
import Retiros from "./pages/admin/Retiros.jsx"
import PayMethods from './pages/admin/paymethods/payMethods.jsx'
import AgentChat from "./pages/admin/agentChat/agentChat.jsx"
import Metodos from "./pages/metodos/metodos.jsx"

const Router = () => {
    return (
        <Routes>
            <Route path="/enviar" element={<Wraper><Enviar /></Wraper>} />
            <Route path="/dashboard" element={<Wraper><Dashboard /></Wraper>} />
            <Route path="/depositar" element={<Wraper><Depositar /></Wraper>} />
            <Route path="/movimientos" element={<Wraper><Movimientos /></Wraper>} />
            <Route path="/retirar" element={<Wraper><Retirar /></Wraper>} />
            <Route path="/comercio/:depositId" element={<Wraper><Comercio /></Wraper>} />
            <Route path="/mis-depositos" element={<Wraper><MisDepositos /></Wraper>} />
            <Route path="/metodos-de-pago" element={<Wraper><Metodos /></Wraper>} />
            
            {/* comerciantes */}
            <Route path="/atencion" element={<Wraper><Atencion /></Wraper>} />
            <Route path="/payMethods" element={<Wraper><PayMethods /></Wraper>} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/recuperacion" element={<Recuperacion />} />

            {/** Admin Routes */}

            <Route path="/admin" element={<AdminWraper><Depositos /></AdminWraper>} />
            <Route path="/depositos" element={<AdminWraper><Depositos /></AdminWraper>} />
            <Route path="/tasas" element={<AdminWraper><Tasas /></AdminWraper>} />
            <Route path="/retiros" element={<AdminWraper><Retiros /></AdminWraper>} />
            <Route path="/transacciones" element={<AdminWraper><Transacciones /></AdminWraper>} />
            <Route path="/usuarios" element={<AdminWraper><Usuarios /></AdminWraper>} />
            <Route path="/metodos-de-pago" element={<AdminWraper><PayMethods /></AdminWraper>} />
            <Route path="/agent/chat/:depositId" element={<AdminWraper><AgentChat /></AdminWraper>} />

            {/** End Admin Routes */}


            <Route path="/" element={<Home />} />
            <Route path="/*" element={<div className="404">404 Not found</div>} />
        </Routes>
    )
}

export default Router