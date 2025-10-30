import { useEffect } from "react";
import useDeposits from "./useDeposits";
import useDepositsWithdrawalsStore from '../store.js';
import useApp from "../../../../globals/useApp";
import money from '../../../../libs/money';
import StatusButtons from "../../../../components/statusButtons/statusButtons.jsx";

const Deposits = () => {

    const { fetchDeposits, filteredDeposits, handleAtender, handleCheck, checkBox, handleBalance,
        checkBoxBalance } = useDeposits();
    const { deposits, status, setStatus } = useDepositsWithdrawalsStore();
    const { user } = useApp();

    useEffect(() => {
        fetchDeposits()
    }, []);

    return (
        <div>
            {user && <div className="card p-2">
                <div className=" flex-between">
                    <div>
                        Usuario: {user?.user?.name}
                        <div>
                            metodos de pago: {user?.methods?.length > 0 && user?.methods?.map(m => <span className="btn btn-warning" key={m?._id}> {m?.currencyName} </span>)}
                        </div>
                        <h3>
                            Saldo: {money(user?.user?.balance)} USD
                        </h3>
                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-end gap-2">
                            <span>
                                Solo metodos que poseas
                            </span>
                            <input className="form-check" type="checkbox" checked={checkBox} onChange={handleCheck} />
                        </div>
                        <div className="d-flex align-items-center justify-content-end gap-2">
                            <span>
                                Solo si posees saldo suficiente
                            </span>
                            <input className="form-check" type="checkbox" onChange={handleBalance} checked={checkBoxBalance} />
                        </div>
                    </div>
                </div>
            </div>}
            <div className="d-flex justify-content-between align-items-end mb-3">
                <h3>Depositos</h3>
                <div className="">
                    <StatusButtons status={status} setStatus={setStatus} />
                </div>
            </div>

            {filteredDeposits()?.map(deposit => (
                <div className="row mb-2" key={deposit?._id}>
                    <div className="col-12">
                        <div className={user?.user?.balance < deposit?.result ? "bg-yellow p-4" : "card p-4"}>
                            <div className="flex-between">
                                <h5 className="m-0">Solicitud de deposito</h5>
                                <h2 className="m-0">{money(deposit?.amount)} {deposit?.method.abbreviation}</h2>
                            </div>
                            <hr className="my-2" />
                            <div className="flex-between">
                                <div>
                                    <div className="text-lg"> <strong> A liberar:</strong> $ {money(deposit.result)} USD</div>
                                    <span><strong>Cliente:</strong> {deposit?.userFrom.name}</span>
                                    <div><strong>Metodo:</strong> {deposit?.method.currencyName}</div>
                                    <div>
                                        <strong>Status:</strong>
                                        <span className={`badge ${deposit?.status === 'pending' ? 'bg-warning' : deposit?.status === 'attended' ? 'bg-success' : 'bg-danger'}`}>
                                            {deposit?.status}
                                        </span>
                                    </div>
                                    <div>{new Date(deposit?.createdAt).toLocaleString()}</div>
                                </div>
                                {user?.user?.balance <= deposit?.result && <div><h1 className="text-warning">Saldo Insuficiente</h1></div>}
                                <div className="d-flex gap-3">
                                    {user.methods?.map(m => m.methodId).includes(deposit?.method.methodId) ? (
                                        <button onClick={() => {
                                            if (user?.user?.balance < deposit?.result) {
                                                alert("Saldo insuficiente");
                                            } else {
                                                handleAtender({ id: deposit?._id });
                                            }
                                        }} className="btn btn-success" disabled={user?.user?.balance < deposit?.result}>
                                            Atender
                                        </button>
                                    ) : (
                                        <div className="alert alert-danger">
                                            <h3 className="text-danger">No posees este metodo de pago</h3>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {deposits?.length === 0 && <div className="alert alert-info text-center">No hay depósitos pendientes</div>}
        </div>
    )
}

export default Deposits;
