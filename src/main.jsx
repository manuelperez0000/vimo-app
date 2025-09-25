import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import './styles/generals.css'
import './styles/root-colors.css'
import { BrowserRouter } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
      <App />
    </BrowserRouter>
)
