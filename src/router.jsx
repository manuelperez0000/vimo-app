import { Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Home from "./pages/home"
import Enviar from "./pages/enviar"
import Depositar from "./pages/depositar"
import Mpvmientos from "./pages/movimientos"
import Retirar from "./pages/retirar"

const Router = () => {
    return (<div className="p-5">
        <Routes>
            <Route path="/enviar" element={<Enviar />} />
            <Route path="/Depositar" element={<Depositar />} />
            <Route path="/Mpvmientos" element={<Mpvmientos />} />
            <Route path="/Enviar" element={<Enviar />} />
            <Route path="/retirar" element={<Retirar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<div className="404">404 Not found</div>} />
        </Routes>
    </div>)
}

export default Router