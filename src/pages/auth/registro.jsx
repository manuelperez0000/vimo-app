import { Link } from "react-router-dom"
import useAuth from "./asets/useAuth"
import { useState } from "react"
import LogoBlanco from '../../assets/logoblanco.svg'

const Registro = () => {

  const { registerFormSubmit, passError } = useAuth()

  const [eye, setEye] = useState()

  const togleEye = () => {
    setEye(!eye)
  }

  return (
    <div className="bg-blue mh-100 flex-center">
      <div className="container-fluid">
        <div className="row pb-5">
          <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mt-5">
            <div className="card text-center p-4">
              <img src={LogoBlanco} height={160} alt="Logo PagosYa" />
              <span className="text-gray-1 text-start mb-2">Registrate gratis</span>
              <div>
                <form onSubmit={registerFormSubmit}>
                  <div className="text-start">
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-blue-1 text-white" id="basic-addon1"><i className="bi bi-person" /> </span>
                      <input defaultValue={'Manuel Perez'} name="name" required type="text" className="form-control" placeholder="Ingresa tu nombre completo" aria-label="" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-blue-1 text-white" id="basic-addon1"><i className="bi bi-envelope-fill" /> </span>
                      <input defaultValue={'manuelperez.0000@gmail.com'} name="email" required type="email" className="form-control" placeholder="Ingrese su correo electronico" aria-label="" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-blue-1 text-white" id="basic-addon1"><i className="bi bi-phone" /> </span>
                      <input defaultValue={'04141220527'} name="phone" required type="text" className="form-control" placeholder="Ingrese su telefono" aria-label="" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-blue-1 text-white" id="basic-addon1"><i className="bi bi-credit-card" /> </span>
                      <input defaultValue={20853601} name="ci" required type="number" className="form-control" placeholder="Ingrese su cedula" aria-label="" aria-describedby="basic-addon1" />
                    </div>
                    <div className="text-end text-gray-1 mb-2">
                      <i onClick={togleEye} className={eye ? "bi-eye-slash-fill cursor" : "bi bi-eye-fill cursor"} id="flexCheckDefault" />
                      <span onClick={togleEye} className="ver-contrassena px-2 cursor" htmlFor="flexCheckDefault">
                        {eye ? "ocultar contraseña" : "ver contraseña"}
                      </span>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-blue-1 text-white" id="basic-addon1"><i className="bi bi-shield-lock-fill" /> </span>
                      <input defaultValue={123456} name="password" minLength={6} required type={eye ? "text" : "password"} className={passError ? "form-control border-danger" : "form-control"} placeholder="Ingrese su contraseña" aria-label="" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-blue-1 text-white" id="basic-addon1"><i className="bi bi-shield-lock-fill" /> </span>
                      <input defaultValue={123456} name="repitPassword" minLength={6} required type={eye ? "text" : "password"} className={`form-control ${passError && 'border-danger'}`} placeholder="Repetir contraseña" aria-label="" aria-describedby="basic-addon1" />
                    </div>
                    {passError && <>
                      <div className="flex-between mb-4">
                        <div className="alert alert-danger w-100">
                          <i className="bi bi-exclamation-triangle" />{passError && passError}
                        </div>
                      </div>
                    </>}
                    <div className="text-center">
                      <button className="btn btn-primary">
                        <div className="mx-5">
                          Registrarme
                        </div>
                      </button>
                    </div>
                  </div>
                </form>

                <div className="mt-3">
                  ¿Ya tiene una cuenta con nosotros? <br />
                  <Link to="/login"> Ingresa aqui </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  )
}

export default Registro