import Router from "./router"
import { Link } from "react-router-dom"
import User from "./components/user"
const App = () =>{
  return (<>
    <Link to='/home' >home</Link>
    <Link to='/login' >Login</Link>
    <Router/>
    <br/>
    <br/>
    <br/>
    <br/>
    <User/>
    </>)
}
export default App