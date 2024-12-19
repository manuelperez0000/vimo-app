import Router from "./router"
import Nav from "./components/nav"
import useNotify from "./libs/notify/notify"
import 'react-toastify/dist/ReactToastify.css'
import Loader from "./components/loader/loader"
import { useEffect } from "react"
import useApp from "./globals/useApp"
const App = () => {
  const { initApp } = useApp()
  const { ToastContainer } = useNotify()

  useEffect(() => {
    initApp()
  }, [])

  return (<>

    <ToastContainer theme="dark" />
    <Router />
    <Loader />
  </>)
}
export default App