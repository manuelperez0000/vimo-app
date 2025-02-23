import logo1 from '../assets/logo2.png'
import logo2 from '../assets/logoblanco.svg'
import { Link } from 'react-router-dom'
const Logo = ({ h, type }) => {
    return (<Link to='/dashboard'>
        {type === 1 && <img src={logo1} height={h} />}
        {type === 2 && <img src={logo2} height={h} />}

    </Link>)

}

export default Logo