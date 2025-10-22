import money from "../../../libs/money";
import useAgentChat from "./useAgentChat";
import { useNavigate } from "react-router-dom";
import useApp from '../../../globals/useApp'
import { useEffect, useRef } from 'react'
const AgentChat = () => {
  const { user } = useApp()
  const navigate = useNavigate()
  const { messageOwner, deposit, releaseMoney, textChat, setTextChat, sendMessage, hour, chats, timeLeft } = useAgentChat();
  const chatRef = useRef(null)

  useEffect(() => {
    // Scroll al final cada vez que cambian los mensajes
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chats]);

  return ( 
    <div className="container-fluid pt-5 mb-5 comercio-page">
      <div className="row pt-5">
        <div className="col-sm-12 col-md-6">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              {deposit?.userFrom && (
                <>
                  <div className="text-center mb-4">

                    <h4 className="mt-3 mb-1">
                      {/* <PerfilImage /> */} Cliente: {deposit.userFrom.name}
                    </h4>
                    <div className="my-4">
                      <p className="lead text-muted">Monto a recibir</p>
                      <h1 className="display-5 fw-bold">{money(deposit.amount)} {deposit.method?.abbreviation}</h1>
                      monto a liberar: ${money(deposit.result)} <br />
                    </div>
                    {deposit?.operationNumber ? (<>
                      {deposit?.status == 'finished' ? <>
                        <div className="alert alert-success">
                          <div><i className="text-success check bi bi-check-circle-fill"></i></div>
                          <p className="lead my-0 text-success">Operacion finalizada con exito!</p>
                          <strong className="text-success">Número de Operación: {deposit.operationNumber}</strong>
                        </div>
                      </> : <>
                        <div className="alert alert-info">
                          <p className="lead">Operación realizada, esperando por tu aprobacion, verifica el pago y libera el dinero al cliente</p>
                          <strong>Número de Operación: {deposit.operationNumber}</strong>
                        </div>
                      </>}

                    </>
                    ) : (
                      <div className="alert alert-warning">
                        <h5>Esperando que el cliente realice el pago</h5>
                        <p className="lead fw-bold">{timeLeft}</p>
                      </div>
                    )}
                    <h5 className="">
                      El cliente usara el metodo de pago:
                      <b>
                        {deposit.method?.currencyName} ({deposit.method?.abbreviation})
                      </b>
                    </h5>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header">Información de Pago</div>
                    <ul className="list-group list-group-flush">
                      {(() => {
                        const metodoAgente = deposit.agent.methods?.find(
                          (m) => m.methodId === deposit.method?.methodId
                        );
                        if (!metodoAgente)
                          return (
                            <li className="list-group-item">
                              No se encontraron métodos de pago.
                            </li>
                          );

                        const renderListItem = (label, value) => {
                          if (!value) return null;
                          return (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              <div>
                                <strong>{label}:</strong> {value}
                              </div>
                              <i
                                className="bi bi-copy copy-icon"
                                onClick={() =>
                                  navigator.clipboard.writeText(value)
                                }
                                style={{ cursor: "pointer" }}
                              />
                            </li>
                          );
                        };

                        return (
                          <>
                            {renderListItem("Teléfono", metodoAgente.phone)}
                            {renderListItem("Email", metodoAgente.email)}
                            {renderListItem("Documento", metodoAgente.document)}
                            {renderListItem("Banco", metodoAgente.bank)}
                            {renderListItem("A nombre de", metodoAgente.userName)}
                            {renderListItem(
                              "Número de cuenta",
                              metodoAgente.accountNumber
                            )}
                          </>
                        );
                      })()}
                    </ul>
                  </div>
                  {deposit?.status == "finished" ? <div className="text-center">
                    <div className="my-1">
                      Operacion finalizada
                    </div>
                    <button
                      className="btn btn-primary btn-lg"
                      onClick={() => navigate('/atencion')}
                    >
                      <i className="bi bi-arrow-right me-2" />
                      Tomar otra orden
                    </button>
                  </div> : <div className="text-center">
                    <button
                      className="btn btn-success btn-lg"
                      disabled={!deposit.operationNumber}
                      onClick={releaseMoney}
                    >
                      <i className="bi bi-check-circle me-2" />
                      Liberar el dinero al cliente
                    </button>
                  </div>}

                </>
              )}
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="card card-header chatsContainer" ref={chatRef}>
            {chats.length == 0 && 'Todavia no hay mensajes'}
            {chats.length > 0 && <>
              {chats.map((item, i) => {
                return <div key={i} className={messageOwner(item, user?.user?._id) ? "left-msg-w" : "right-msg-w"}>
                  <div className={messageOwner(item, user?.user?._id) ? "left-msg" : "right-msg"}>
                    <p className="item-msg" style={{ whiteSpace: "pre-line" }}>
                      {item.message}
                    </p>
                    <div className="hora-msg">{hour(item.createdAt)}</div>
                  </div>
                </div>
              })
              }
            </>
            }
          </div>

          <div className="card shadow-sm mt-2">
            <div className="card-body p-2">
              <form onSubmit={(e) => sendMessage(e)}>
                <div className="d-flex align-items-center">
                  <input onChange={(e) => setTextChat(e.target.value)}
                    value={textChat}
                    type="text"
                    placeholder="Enviar un mensaje al comerciante..."
                    name="comercio"
                    className="form-control border-0"
                    autoFocus
                  />
                  <div className="chat-icons ms-2 d-flex gap-2">
                    {/*  <i className="bi bi-paperclip fs-4" /> */}
                    <button className="bg-transparent border-0" > <i className="bi bi-arrow-up-circle-fill fs-3 text-primary" /></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AgentChat;
