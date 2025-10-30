/* import useDeposits from "./useDeposits";
import useWithdrawals from "./withdrawals/useWithdrawals";

import money from '../../../libs/money' */

import useDepositsWithdrawalsStore from "./store.js";
import Deposits from "./deposits/deposits.jsx";
import Whithdrawals from "./withdrawals/whithdrawals.jsx";

import { useState } from "react";
const Atencion = () => {

    const [view, setView] = useState('deposits'); // 'deposits' or 'withdrawals'
    const { deposits, withdrawals } = useDepositsWithdrawalsStore();
    
    return <div className="container pt-5">

        <div className="row mb-3 pt-5">
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
                {view === 'deposits' ? <Deposits /> : <Whithdrawals />}
            </div>
        </div>
    </div>
    /* 
    const { deposits, handleAtender: handleAtenderDeposit } = useDeposits();
    const { withdrawals, handleAtender: handleAtenderWithdrawal } = useWithdrawals();
    const [withdrawalView, setWithdrawalView] = useState('pending'); // 'pending' or 'taken' or 'canceled' or 'finished'

    const filteredWithdrawals = withdrawals?.filter(withdrawal => withdrawal.status === withdrawalView);
    const filteredDeposits = deposits?.filter(deposit => deposit.status === withdrawalView);

    return (
        <div className="container padding-nav">
            
            <div className="row">
                <div className="col-12">
                    {view === 'deposits' && (
                        <>
                            
                            {console.log("filteredDeposits: ", filteredDeposits)}
                            {filteredDeposits?.map(deposit => (
                                
                            ))}
                        </>
                    )}
                    {view === 'withdrawals' && (
                        <>
                            <div className="mb-3">
                                <label htmlFor="withdrawal-select" className="form-label">Seleccionar tipo de retiros:</label>
                                <select id="withdrawal-select" className="form-select" value={withdrawalView} onChange={(e) => setWithdrawalView(e.target.value)}>
                                    <option value="pending">Retiros Pendientes</option>
                                    <option value="taken">Retiros Tomados</option>
                                    <option value="canceled">Retiros Cancelados</option>
                                    <option value="finished">Retiros Finalizados</option>
                                </select>
                            </div>
                            {filteredWithdrawals?.length === 0 && <div className="alert alert-info text-center">{withdrawalView === 'pending' ? 'No hay retiros pendientes' : withdrawalView === 'taken' ? 'No hay retiros tomados' : withdrawalView === 'canceled' ? 'No hay retiros cancelados' : 'No hay retiros finalizados'}</div>}

                            {filteredWithdrawals?.map(withdrawal => (
                                <div className="row mb-2" key={withdrawal?._id}>
                                    <div className="col-12">
                                        {console.log("withdrawal: ", withdrawal)}
                                        <div className="card p-4">
                                            <div className="flex-between">
                                                <div>
                                                    <h2 className="m-0">Retiro</h2>
                                                </div>
                                                <div>
                                                    <h2 className="m-0">{withdrawal?.amount} {withdrawal?.method?.abbreviation}</h2>
                                                </div>
                                            </div>
                                            <hr className="my-1" />
                                            <div className="flex-between">
                                                <div>
                                                    <span><strong>Cliente:</strong> {withdrawal?.userFrom.name}</span>

                                                    <div><strong>Metodo:</strong> {withdrawal?.method?.currencyName}</div>
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
    ); */
}

export default Atencion
