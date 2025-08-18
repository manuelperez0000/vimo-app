import { useState } from "react"
import useDepositar from "../depositar/useDepositar"
import ModalRetirar from "./modalRetirar"

const Retirar = () => {

  const { getMethod, methods } = useDepositar()

  const [value, setValue] = useState('0.00')
  const [modal, setModal] = useState(false)

  const handleNumberInput = (e) => {
    const input = e.target.value
    if (!input) {
      setValue('0.00')
      return
    }

    const numbers = input.replace(/[^0-9]/g, '')
    if (numbers.length > 8) return
    const numericValue = parseInt(numbers) / 100;
    const formattedValue = new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(numericValue)

    setValue(formattedValue)
  }

  const handleKeyDown = (e) => {
    // Permitir solo números y teclas de control
    if (!/^\d$/.test(e.key) &&
      !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
      e.preventDefault()
    }
  }

  return (
    <div className="container-fluid">
      <ModalRetirar setModal={setModal} modal={modal} />
      <div className="row">
        <div className="col-6 offset-3 py-4">
          <section>
            <div className="title-section">Retirar</div>
            <div className="flex-between mb-4">
              <h5>Saldo en tu cuenta</h5>
              <p className="font-saldo"> <b>USD</b> 34,77</p>
            </div>

            <div className="text-center">
              <div className="text-gray-2">
                monto a retirar
              </div>
              <div className="flex-center mb-4">
                <h1 className="formated text-dark">USD</h1>
                <input autoFocus onChange={handleNumberInput}
                  onKeyDown={handleKeyDown}
                  placeholder="0.00" value={value} type="text" className="send-input" />
              </div>

              <div className="text-gray-2 mb-3">
                Elija su metodo de retiro
              </div>

              <select onChange={(e) => getMethod(e.target.value)} className="form-select mb-4 mt-1">
                <option value={JSON.stringify({ n: '', v: 0, c: 0, s: '' })}>Elija un metodo de deposito</option>
                {methods.map((m, i) => {
                  return <option key={i} value={JSON.stringify(m)}> {m.n} ({m.s}) </option>
                })}
              </select>

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