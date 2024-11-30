import { methods } from "./utils"
import useMethod from "./store"
import { useEffect, useRef } from "react"

const Depositar = () => {

  const inputRef = useRef(0)

  const { method, setMethod, result, setResult } = useMethod()

  const calcResult = (e) => {
    const res = method.v != 0 ? (e.target.value / method.v).toFixed(2) : 0
    setResult(res)
  }

  const getMethod = (e) => {
    const selectedMethod = JSON.parse(e)
    setMethod(selectedMethod)
  }

  useEffect(() => {
    calcResult({ target: { value: inputRef.current.value } })
  }, [method])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 offset-3 py-4">
          <section>
            <div className="flex-between mb-4">
              <h5>Saldo en tu cuenta</h5>
              <p className="font-saldo"> <b>USD</b> 34,77</p>
            </div>

            <span className="text-gray-2 text-sm"> Metodo de deposito </span>
            <select onChange={(e) => getMethod(e.target.value)} className="form-select mb-4 mt-1">
              <option value={JSON.stringify({ n: '', v: 0, c: 0, s: '' })}>Elija un metodo de deposito</option>
              {methods.map((m, i) => {
                return <option key={i} value={JSON.stringify(m)}> {m.n} ({m.s}) </option>
              })}
            </select>

            <div className="text-center mb-2">
              <span>1 USD = {method.v} {method.s}</span>
            </div>
            <span className="text-gray-2 text-sm">
              Monto a depositar en <b> {method.s} </b>
            </span>
            <div className="input-group mb-3 mt-1">
              <input min={0} max={1500} ref={inputRef} onChange={calcResult} type="number" className="form-control span-text" placeholder="Ingrese el monto a depositar" aria-label="" aria-describedby="basic-addon1" />
              <span className="input-group-text span-text2 bg-white" id="basic-addon1"> {method.s} </span>
            </div>

            <div className="mb-4">
              <div className="w-100 text-sm text-gray-2">
                Total
              </div>
              <h2 className="black">
                {result} USD
              </h2>
            </div>
            <div>
              <button className="btn btn-primary w-100"> Depositar </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Depositar