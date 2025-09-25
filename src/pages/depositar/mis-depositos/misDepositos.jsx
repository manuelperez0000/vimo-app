import useMisDepositos from "./useMisDepositos"
import { useNavigate } from "react-router-dom";
const MisDepositos = () => {
  const { deposits } = useMisDepositos();
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-6 offset-3 py-4">
                <h2>Mis Depositos</h2>

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
                                    <button onClick={() => navigate('/comercio/' + deposit._id)} className="btn btn-success">Ir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>))}

            </div>
        </div>
        </div>
  )
}

export default MisDepositos