import useEnviar from "./useEnviar"
import money from "../../libs/money"

const Enviar = () => {
  const { handleNumberInput, handleKeyDown, value, user } = useEnviar()

  return (
    <div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3 py-4">
            <section>
              <div className="title-section">Enviar</div>

              <form action="">
                <div className="">
                  <div className="text-gray-2">
                    monto a enviar
                  </div>
                  <div className="flex-between">
                    <div className="mb-0">
                      <span className="text-gray-1 dolar-icon">$</span>
                      <input autoFocus onChange={handleNumberInput}
                        onKeyDown={handleKeyDown}
                        placeholder="0,00" value={value} type="text" className="send-input" />
                    </div>
                    <div>
                      <div className="text-gray-1 dolar-icon">USD</div>
                    </div>
                  </div>
                  <div className="text-gray-2 text-sm mb-4"> Saldo en su cuenta ${user && money(user.user.balance)} USD</div>
                  <div className="text-gray-2 mb-3">
                    Direccion a donde envia
                  </div>
                  <input type="email" className="input-correo-envia" placeholder="Ingresa el correo del receptor" />
                  <div className="text-end my-3">
                    <a href="" className="btn-elegir">
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