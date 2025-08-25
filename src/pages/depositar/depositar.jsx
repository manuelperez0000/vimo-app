import useDepositar from "./useDepositar"
import money from '../../libs/money'
import useUserStorGlobal from "../../globals/useUserStoreGlobal"
import DepositModal from "./components/depositModal"
import metyhodsComponents from '../../store/methodsComponents.json'

const Depositar = () => {

  const { method, result, inputRef, calcResult, getMethod, deposit } = useDepositar()
  const { user } = useUserStorGlobal()

  return (
    <div className="container-fluid">
      <DepositModal />
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3 py-4">
          <section>
            <div className="title-section">Depositar</div>
            <div className="flex-between mb-1">
              <h5 className="">Saldo en tu cuenta</h5>
              <p className="font-saldo"> <b>$ {user && money(user.user.balance)} USD </b></p>
            </div>
            <span className="text-gray-2 text-sm"> Metodo de deposito </span>
            <form onSubmit={deposit}>

              <select name="method" onChange={(e) => getMethod(e.target.value)} className="form-select mb-2 mt-1">
                <option value={JSON.stringify({ n: '', v: 0, c: 0, s: '' })}>Elija un metodo de deposito</option>
                {metyhodsComponents.methods.map((m, i) => {
                  return <option key={i} value={JSON.stringify(m)}> {m.currencyName} ({m.abbreviation}) </option>
                })}

              </select>

              {/* <div className="text-center mb-2">
                <span>1 USD = {method.v} {method.s}</span>
              </div> */}
              <span className="text-gray-2 text-sm">
                Monto a depositar en <b> {method.s} </b>
              </span>
              <div className="input-group mb-3 mt-1">
                <input name="amount" min={0} max={1500} ref={inputRef} onChange={calcResult} type="number" className="form-control span-text" placeholder="Ingrese el monto a depositar" aria-label="" aria-describedby="basic-addon1" />
                <span className="input-group-text span-text2 bg-white" id="basic-addon1"> {method.s} </span>
              </div>

              <div className="mb-4">
                <div className="w-100 text-sm text-gray-2">
                  Total
                </div>
                <h2 className="black">
                  {money(result)} USD
                </h2>
              </div>
              <div>
                <button className="btn btn-primary w-100"> Depositar </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Depositar