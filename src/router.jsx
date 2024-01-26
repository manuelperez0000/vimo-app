import { Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Home from "./pages/home"

const Router = () => {
    return (<>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<div className="404">404 Not found</div>} />
        </Routes>
    </>)
}

export default Router