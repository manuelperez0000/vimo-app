import logo from '../assets/logo2.png'
import { Link } from 'react-router-dom'
const Logo = () => {
    return (<Link to='/dashboard'>
        <img src={logo} className='logo' />
    </Link>)

}

export default Logo