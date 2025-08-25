import useDepositar from "../depositar/useDepositar"
import ModalRetirar from "./modalRetirar"
import useRetirar from "./useRetirar"
import useRetirarStore from './useRetirarStore'

const Retirar = () => {

  const { userMethods } = useRetirarStore()
  const { value, modal, setModal, handleNumberInput, handleKeyDown } = useRetirar()
  const { getMethod, method } = useDepositar()

  return (
    <div className="container-fluid">

      <ModalRetirar setModal={setModal} modal={modal} />

      <div className="row">
        <div className="col-12 col-md-6 offset-md-3 py-2">
          <section>
            <div className="title-section">Retirar</div>
            <div className="flex-between mb-2">
              <h5>Saldo en tu cuenta</h5>
              <p className="font-saldo"> <b>USD</b> 34,77</p>
            </div>

            <div className="text-center">
              <div className="text-gray-2">
                monto a retirar
              </div>
              <div className="flex-center mb-2">
                <h1 className="formated text-dark">USD</h1>
                <input autoFocus onChange={handleNumberInput}
                  onKeyDown={handleKeyDown}
                  placeholder="0.00" value={value} type="text" className="send-input" />
              </div>

              <div className="text-gray-2 mb-3">
                Elija su metodo de retiro
              </div>

              <select onChange={(e) => getMethod(e.target.value)} className="form-select mb-4 mt-1">
                <option value='none'>Elija un metodo de deposito</option>
                {userMethods.map((m, i) => (
                  <option key={i} value={JSON.stringify(m)}> {m.currencyName} {console.log(m)} </option>
                ))}
              </select>

              {method && <div className="card p-3 mb-4" >
                <div className="card-body">
                  <h5 className="card-title">{method?.currencyName}</h5>
                  <p className="card-text">Método de retiro seleccionado</p>
                </div>
              </div>}

              <div className="text-end">
                <button className="btn btn-primary" onClick={() => setModal(true)}> + Agregar nuevo metodo de retiro</button>
              </div>

              <div className="text-end">
                <button className="btn btn-primary mt-4 px-5"> Retirar </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Retirar