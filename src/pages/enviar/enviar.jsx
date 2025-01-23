import useEnviar from "./useEnviar"
import money from "../../libs/money"
import ModalEnviar from "./modals/modalEnviar"
import ConfirmModal from "./modals/confirmModal"
import SuccessModal from "./modals/successModal"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import ContactsModal from "./modals/contactsModal"
import useContactsStore from "./useContactsStore"

const Enviar = () => {

  const { setModalContact } = useContactsStore()
  const [urlParam, setUrlParam] = useState()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const to = queryParams.get('to')


  useEffect(() => {
    setUrlParam(to)
  }, [])

  const { handleNumberInput, handleKeyDown, value, user, confirmar, errors, constactEmail } = useEnviar()

  return (
    <div>
      <ModalEnviar />
      <ConfirmModal />
      <SuccessModal />
      <ContactsModal setUrlParam={setUrlParam} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3 py-4">
            <section>
              <div className="title-section">Enviar</div>
              <form onSubmit={confirmar}>
                <div className="">
                  <div className="text-gray-2">
                    monto a enviar
                  </div>
                  <div className="flex-between">
                    <div className="mb-0">
                      <span className={errors.code === 1 ? "text-danger dolar-icon" : "text-gray-1 dolar-icon"}>$</span>
                      <input required name="amount" autoFocus onChange={handleNumberInput}
                        onKeyDown={handleKeyDown}
                        placeholder="0,00" value={value} type="text" className={errors.code === 1 ? `send-input text-danger` : `send-input`} />
                    </div>
                    <div>
                      <div className="text-gray-1 dolar-icon">USD</div>
                    </div>
                  </div>
                  <div className="text-gray-2 text-sm mb-4"> Saldo en su cuenta ${user && money(user.user.balance)} USD</div>
                  <div className="text-gray-2 mb-2">
                    Direccion a donde envia
                  </div>
                  <input defaultValue={urlParam} onChange={constactEmail} required name="email" type="email" className="input-correo-envia" placeholder="Ingresa el correo del receptor" />
                  {/* <div className="mt-3 text-end">
                    <button onClick={() => saveContact()} className="btn btn-primary"> + Agregar a tus contactos </button>
                  </div> */}
                  {errors && <div className="">
                    <div className="alert alert-danger mt-4" role="alert">
                      {errors.m}
                    </div>
                  </div>}

                  <div className="text-end my-3">
                    <a onClick={() => setModalContact(true)} className="btn-elegir">
                      <i className="bi bi-list " /> Elegir de tus contactos
                    </a>
                  </div>
                  <div className="text-end">
                    <button className="btn btn-primary mt-4 px-5"> Enviar </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Enviar