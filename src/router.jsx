import { Routes, Route } from "react-router-dom"
import Login from "./pages/auth/login"
import Registro from "./pages/auth/registro"
import Recuperacion from "./pages/auth/recuperacion"
import Home from "./pages/home"
import Enviar from "./pages/enviar/enviar"
import Depositar from "./pages/depositar/depositar"
import Movimientos from "./pages/movimientos"
import Retirar from "./pages/retirar/retirar"

const Router = () => {
    return (<div className="px-5 py-1">
        <Routes>
            <Route path="/enviar" element={<Enviar />} />
            <Route path="/home" element={<Home />} />
            <Route path="/depositar" element={<Depositar />} />
            <Route path="/movimientos" element={<Movimientos />} />
            <Route path="/retirar" element={<Retirar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/recuperacion" element={<Recuperacion />} />
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<div className="404">404 Not found</div>} />
        </Routes>
    </div>)
}

export default Router