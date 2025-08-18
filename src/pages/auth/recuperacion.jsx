import { Link } from "react-router-dom"
import LogoBlanco from '../../assets/logoblanco.svg'
const Recuperacion = () => {
  return (
    <div className="container-fluid bg-blue mh-100">
      <div className="row">
        <div className="mt-5 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
          <div className="card p-4">
            <img src={LogoBlanco} height={160} alt="Logo PagosYa" />
            <span className="text-gray-1 mb-2">Recuperacion de contraseña</span>
            <div>
              <div className="text-start">
                <div className="input-group mb-3">
                  <span className="input-group-text bg-blue-1 text-white" id="basic-addon1"><i className="bi bi-envelope-fill" /> </span>
                  <input type="text" className="form-control" placeholder="Ingrese su correo electronico" aria-label="" aria-describedby="basic-addon1" />
                </div>
                <div className=" mb-2 text-center">
                  <p className="mb-2">Te enviaremos un correo de recuperacion</p>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary">
                    <div className="mx-5">
                      Enviar
                    </div>
                  </button>
                </div>
              </div>
              <div className="mt-3">
                ¿Aun no tienes cuenta con nosotros?
                <Link to="/registro"> Registrate aqui </Link> es gratis
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Recuperacion