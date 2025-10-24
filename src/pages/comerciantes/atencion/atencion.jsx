import { useState } from "react";
import useDeposits from "./useDeposits";
import useWithdrawals from "./useWithdrawals";
import useApp from "../../../globals/useApp";
import money from '../../../libs/money'

const Atencion = () => {
    const { user } = useApp();
    const { deposits, handleAtender: handleAtenderDeposit } = useDeposits();
    const { withdrawals, handleAtender: handleAtenderWithdrawal } = useWithdrawals();
    const [view, setView] = useState('deposits'); // 'deposits' or 'withdrawals'

    return (
        <div className="container padding-nav">
            <div className="row mb-3">
                <div className="col-12 d-flex justify-content-center gap-2">
                    <button className={`btn ${view === 'deposits' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setView('deposits')}>
                        Ver Depósitos
                        {deposits?.length > 0 && (
                            <span className="badge rounded-pill bg-danger ms-2">{deposits.length}</span>
                        )}
                    </button>
                    <button className={`btn ${view === 'withdrawals' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setView('withdrawals')}>
                        Ver Retiros
                        {withdrawals?.length > 0 && (
                            <span className="badge rounded-pill bg-danger ms-2">{withdrawals.length}</span>
                        )}
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {view === 'deposits' && (
                        <>
                            {deposits?.length === 0 && <div className="alert alert-info text-center">No hay depósitos pendientes</div>}
                            {deposits?.map(deposit => (
                                <div className="row mb-2" key={deposit?._id}>
                                    <div className="col-12">
                                        <div className={user?.user?.balance < deposit?.result ? "bg-yellow p-4" : "card p-4"}>
                                            <div className="flex-between">
                                                <h2 className="m-0">Deposito</h2>
                                                <h2 className="m-0">{deposit?.amount} {deposit?.method.abbreviation}</h2>
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
                                                    <button onClick={() => {
                                                        if (user?.user?.balance < deposit?.result) {
                                                            alert("Saldo insuficiente");
                                                        } else {
                                                            handleAtenderDeposit(deposit?._id);
                                                        }
                                                    }} className="btn btn-success" disabled={user?.user?.balance < deposit?.result}>Atender</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                    {view === 'withdrawals' && (
                        <>
                            {withdrawals?.length === 0 && <div className="alert alert-info text-center">No hay retiros pendientes</div>}
                            {withdrawals?.map(withdrawal => (
                                <div className="row mb-2" key={withdrawal?._id}>
                                    <div className="col-12">
                                        <div className="card p-4">
                                            <div className="flex-between">
                                                <div>
                                                    <h2 className="m-0">Retiro</h2>
                                                </div>
                                                <div>
                                                    <h2 className="m-0">{withdrawal?.amount} {withdrawal?.method.abbreviation}</h2>
                                                </div>
                                            </div>
                                            <hr className="my-1" />
                                            <div className="flex-between">
                                                <div>
                                                    <span><strong>Cliente:</strong> {withdrawal?.userFrom.name}</span>

                                                    <div><strong>Metodo:</strong> {withdrawal?.method.currencyName}</div>
                                                    <div>
                                                        <strong>Status:</strong>
                                                        <span className={`badge ${withdrawal?.status === 'pending' ? 'bg-warning' : withdrawal?.status === 'attended' ? 'bg-success' : 'bg-danger'}`}>
                                                            {withdrawal?.status}
                                                        </span>
                                                    </div>
                                                    <div>{new Date(withdrawal?.createdAt).toLocaleString()}</div>
                                                </div>
                                                <div className="d-flex gap-3">
                                                    <button onClick={() => handleAtenderWithdrawal(withdrawal?._id)} className="btn btn-success">Atender</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Atencion
