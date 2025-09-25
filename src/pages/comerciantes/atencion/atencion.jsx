import useDeposits from "./useDeposits"
const Atencion = () => {
    const { deposits, handleAtender } = useDeposits();
    console.log(deposits);
    return (
        <div className="container">
            {deposits.length === 0 && <div className="alert alert-info text-center">No hay depositos pendientes</div>}

            {deposits.length > 0 && deposits.map(deposit => (
                <div className="row mb-2" key={deposit._id}>
                    <div className="col-12">
                        <div className="card p-4">
                            <div className="flex-between">
                                <div>
                                    <span><strong>Cliente:</strong> {deposit.userFrom.name} </span>
                                    <div>
                                        <strong>Monto:</strong> {deposit.amount} {deposit.method.abbreviation}
                                    </div>
                                    <div>
                                        <strong>Metodo:</strong> {deposit.method.currencyName}
                                    </div>
                                    <div>
                                        <strong>Status:</strong>
                                        <span className={`badge ${deposit.status === 'pending' ? 'bg-warning' : deposit.status === 'attended' ? 'bg-success' : 'bg-danger'}`}>
                                            {deposit.status}
                                        </span>
                                    </div>

                                    <div>{new Date(deposit.createdAt).toLocaleString()}</div>
                                </div>
                                <div className="d-flex gap-3">
                                    <button onClick={() => handleAtender(deposit._id)} className="btn btn-success">Atender</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>))}
        </div>
    )
}

export default Atencion