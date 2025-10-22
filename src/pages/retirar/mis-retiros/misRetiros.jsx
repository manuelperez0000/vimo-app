import useMisRetiros from "./useMisRetiros";
import { useNavigate } from "react-router-dom";

const MisRetiros = () => {
  const { withdrawals } = useMisRetiros();
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 offset-3 py-4">
          <h2>Mis Retiros</h2>

          {withdrawals.length > 0 &&
            withdrawals.map((withdrawal) => (
              <div className="row mb-2" key={withdrawal._id}>
                <div className="col-12">
                  <div className="card p-4">
                    <div className="flex-between">
                      <div>
                        <span>
                          <strong>Cliente:</strong> {withdrawal.userFrom.name}{" "}
                        </span>
                        <div>
                          <strong>Monto:</strong> {withdrawal.amount}{" "}
                          {withdrawal.method.abbreviation}
                        </div>
                        <div>
                          <strong>Metodo:</strong>{" "}
                          {withdrawal.method.currencyName}
                        </div>
                        <div>
                          <strong>Status:</strong>
                          <span
                            className={`badge ${
                              withdrawal.status === "pending"
                                ? "bg-warning"
                                : withdrawal.status === "attended"
                                ? "bg-success"
                                : "bg-danger"
                            }`}
                          >
                            {withdrawal.status}
                          </span>
                        </div>

                        <div>
                          {new Date(withdrawal.createdAt).toLocaleString()}
                        </div>
                      </div>
                      <div className="d-flex gap-3">
                        <button
                          onClick={() => navigate("/comercio/" + withdrawal._id)}
                          className="btn btn-success"
                        >
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MisRetiros;
