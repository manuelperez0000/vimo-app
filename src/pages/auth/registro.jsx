import { Link } from "react-router-dom"

const Registro = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 offset-4 mt-4">
          <div className="card text-center p-4">
            <i className="bi bi-person-circle login-icon" />
            <h1 className="text-gray-1 mb-4">Registrate</h1>
            <div>
              <div className="text-start">
                <div className="input-group mb-3">
                  <span className="input-group-text bg-blue-1 text-white" id="basic-addon1"><i className="bi bi-envelope-fill" /> </span>
                  <input type="text" className="form-control" placeholder="Ingresa tu nombre completo" aria-label="" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-blue-1 text-white" id="basic-addon1"><i className="bi bi-envelope-fill" /> </span>
                  <input type="text" className="form-control" placeholder="Ingrese su correo electronico" aria-label="" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-blue-1 text-white" id="basic-addon1"><i className="bi bi-shield-lock-fill" /> </span>
                  <input type="password" className="form-control" placeholder="Ingrese su contraseña" aria-label="" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-blue-1 text-white" id="basic-addon1"><i className="bi bi-shield-lock-fill" /> </span>
                  <input type="password" className="form-control" placeholder="Repetir contraseña" aria-label="" aria-describedby="basic-addon1" />
                </div>
                <div className="flex-between mb-4">


                </div>
                <div className="text-center">
                  <button className="btn btn-secondary">
                    <div className="mx-5">
                      Registrarme
                    </div>
                  </button>
                </div>
              </div>
              <div className="mt-3">
                ¿Ya tiene una cuenta con nosotros? <br />
                <Link to="/registro"> Ingresa aqui </Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Registro