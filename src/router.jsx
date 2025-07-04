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
import Atencion from "./pages/comerciantes/atencion.jsx"
import PayMethods from "./pages/admin/payMethods.jsx"

const Router = () => {
    return (
        <Routes>
            <Route path="/enviar" element={<Wraper><Enviar /></Wraper>} />
            <Route path="/dashboard" element={<Wraper><Dashboard /></Wraper>} />
            <Route path="/depositar" element={<Wraper><Depositar /></Wraper>} />
            <Route path="/movimientos" element={<Wraper><Movimientos /></Wraper>} />
            <Route path="/retirar" element={<Wraper><Retirar /></Wraper>} />
            <Route path="/comercio" element={<Wraper><Comercio /></Wraper>} />
            
            {/* comerciantes */}
            <Route path="/atencion" element={<Wraper><Atencion /></Wraper>} />
            <Route path="/payMethods" element={<Wraper><PayMethods /></Wraper>} />

            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/recuperacion" element={<Recuperacion />} />
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<div className="404">404 Not found</div>} />
        </Routes>
    )
}

export default Router