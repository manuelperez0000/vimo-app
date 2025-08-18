import { useNavigate } from "react-router-dom"
import Nav from "./nav"
import { useEffect } from "react"
import useApp from "../globals/useApp"

// eslint-disable-next-line react/prop-types
const Wraper = ({ children }) => {

    const { user } = useApp()
    const navigate = useNavigate()

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('user'))
        if (!localUser) {
            navigate('/login')
        }
    }, [user])

    if (Object.keys(user).length > 0) return (<div className="wraper-page">
        <Nav />
        {children}
    </div>
    )
}

export default Wraper