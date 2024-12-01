import { Link } from "react-router-dom"

const Recuperacion = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 offset-4 mt-4">
          <div className="card text-center p-4">
            <i className="bi bi-person-circle login-icon" />
            <h1 className="text-gray-1 mb-4">Recuperacion de contraseña</h1>
            <div>
              <div className="text-start">
                <div className="input-group mb-3">
                  <span className="input-group-text bg-blue-1 text-white" id="basic-addon1"><i className="bi bi-envelope-fill" /> </span>
                  <input type="text" className="form-control" placeholder="Ingrese su correo electronico" aria-label="" aria-describedby="basic-addon1" />
                </div>
                <div className="flex-between mb-2">
                  <p className="mb-2">Te enviaremos un correo de recuperacion</p>
                </div>
                <div className="text-center">
                  <button className="btn btn-secondary">
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