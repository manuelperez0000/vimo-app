import logo from '../assets/logo2.png'
import { Link } from 'react-router-dom'
const Logo = () => {
    return (<Link to='/home'>
        <img src={logo} className='logo' />
    </Link>)

}

export default Logo