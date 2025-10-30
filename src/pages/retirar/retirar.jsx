import { useNavigate } from "react-router-dom";
import ModalRetirar from "./modalRetirar";
import ModalManageMethods from "./ModalManageMethods";
import useRetirar from "./useRetirar";
import useUserStorGlobal from "../../globals/useUserStoreGlobal";
import traslate from '../../store/traslateLib.json'
import money from '../../libs/money'
import ModalSuccess from "./modalSuccess";

const Retirar = () => {

  const navigate = useNavigate();
  const { user } = useUserStorGlobal();
  const { amount, modalSuccess, setModalSuccess, sendWhithdraw, modal, setModal, userMethods, handleNumberInput, handleKeyDown, total, method, getMethod,setModalManage } = useRetirar();

  return (
    <div className="container vh-100 pt-5">

      <ModalSuccess modalSuccess={modalSuccess} setModalSuccess={setModalSuccess} />
      <ModalRetirar setModal={setModal} modal={modal} />
      <ModalManageMethods />

      <div className="row mb-3">
        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
          <div className="flex-end gap-2 mt-3">
            <button className="btn btn-primary btn-sm" onClick={() => setModal(true)}>+ Agregar nuevo método de retiro</button>
            <button className="btn btn-info btn-sm" onClick={() => setModalManage(true)}>Gestionar métodos de retiro</button>
            <button className="btn btn-secondary btn-sm" onClick={() => navigate('/mis-retiros')}>Ver mis retiros</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">Retirar Fondos</h2>

              <div className="d-flex justify-content-between align-items-center mb-4 p-3 bg-light rounded">
                <h5 className="mb-0">Saldo en tu cuenta</h5>
                <p className="font-saldo mb-0"><b>USD</b> {user?.user?.balance?.toFixed(2) || '0.00'}</p>
              </div>

              <div className="">
                {userMethods?.length > 0 ? <>
                  <label htmlFor="withdraw-method" className="form-label text-muted mb-2">Elija su método de retiro</label>
                  <select id="withdraw-method" onChange={(e) => getMethod(e.target.value)} className="form-select form-select-lg mb-4">
                    <option value={0}>Seleccione un método</option>
                    {userMethods.map((m, i) => (
                      <option key={i} value={JSON.stringify(m)}>{m?.currencyName} ({m?.abbreviation})</option>
                    ))}
                  </select>
                </>
                  : <> Agregue un metodo de pago </>}
                {method && Object.keys(method).length > 0 && <>
                  <label htmlFor="amount" className="form-label text-muted mb-2">Monto a retirar</label>
                  <div className="input-group mb-4">
                    <span className="input-group-text">USD</span>
                    <input
                      id="amount"
                      autoFocus
                      onChange={handleNumberInput}
                      onKeyDown={handleKeyDown}
                      placeholder="0.00"
                      value={amount}
                      type="text"
                      className="form-control form-control-lg text-end send-input"
                    />
                  </div>
                  <h1>Total: {money(total)} {method?.abbreviation}</h1>
                  {method?.currencyName && (
                    <div className="card text-start p-3 mb-4 border-primary">
                      <div className="card-body">
                        <h5 className="card-title text-primary">{method.currencyName}</h5>
                        <hr />
                        <div className="row">
                          {Object.entries(method).map(([key, value]) => {
                            if (key !== 'tasaId' && key !== 'currencyName'
                              && key !== 'buy' && key !== 'sell'
                              && key !== '_id' && key !== 'userId'
                              && key !== 'methodId' && key !== '__v'
                              && key !== 'updatedAt' && key !== 'createdAt'
                              && key !== 'currencyType' && key !== 'abbreviation') {
                              if (value) return (
                                <div className="col-6 mb-2" key={key}>
                                  <strong className="text-capitalize">{traslate[key]}:</strong>
                                  <p className="text-muted">{value}</p>
                                </div>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="d-grid gap-2">
                    <button onClick={sendWhithdraw} className="btn btn-primary btn-lg" disabled={!method || !amount}>Retirar</button>
                  </div>
                </>}

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Retirar
