import useComercio from "./useComercio";
import money from "../../libs/money";
import Modal from "../../components/modals/Modal";
import useApp from "../../globals/useApp";
import { useEffect, useRef } from "react";

const Comercio = () => {
    const chatRef = useRef(null)
    const { user } = useApp()
    const {
        deposit,
        remainingTime,
        showModal,
        setShowModal,
        operationNumber,
        setOperationNumber,
        sendOperationNumber,
        renderListItem,
        chats,
        messageOwner,
        hour,
        sendMessage,
        setTextChat,
        textChat
    } = useComercio();

    useEffect(() => {

        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [chats]);

    return (
        <div className="container-fluid comercio-page">
            <div className="row">
                <div className={deposit?.agent ? "col-6" : "col-12"}>
                    <div className="card shadow-sm">
                        <div className="card-body p-4">
                            {deposit?.agent ? (
                                <>
                                    <div className="text-center mb-4">

                                        <h4 className="mt-3 mb-1">Cajero: {deposit.agent.name}</h4>
                                        <div className="my-4">
                                            <h1 className="display-5 fw-bold">{money(deposit.amount)} {deposit.method?.abbreviation}</h1>
                                            <p className="lead text-muted">Monto a recibir en USD <strong> ${money(deposit?.result)}</strong></p>
                                        </div>
                                        {deposit.operationNumber ? (<>
                                            {deposit.status == 'finished' ? <>
                                                <div className="alert alert-success">
                                                    <div><i className="text-success check bi bi-check-circle-fill"></i></div>
                                                    <p className="lead my-0 text-success">Operacion finalizada con exito! 2</p>
                                                    <strong className="text-success">Número de Operación: {deposit.operationNumber}</strong>
                                                </div>
                                            </> : <>
                                                <div className="alert alert-info">
                                                    <p className="lead">Esperando por aprobación del comerciante</p>
                                                    <strong>Número de Operación: {deposit.operationNumber}</strong>
                                                </div>
                                            </>}
                                        </>
                                        ) : (
                                            remainingTime && (
                                                <div className="alert alert-warning">
                                                    Tiempo restante para realizar el depósito: <strong>{remainingTime}</strong>
                                                    <p className="mb-0 mt-2">El depósito se cancelará automáticamente al concluir los 15 minutos.</p>
                                                </div>
                                            )
                                        )}
                                        <p className="text-muted">
                                            {!deposit.operationNumber ? <>Para realizar un depósito en {deposit.method?.abbreviation} ({deposit.method?.currencyName}), utilice los siguientes datos:</>
                                                : <>Se realizo el deposito en {deposit.method?.abbreviation} ({deposit.method?.currencyName})</>}
                                        </p>
                                    </div>

                                    <div className="card mb-4">
                                        <div className="card-header">
                                            Información de Pago
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            {(() => {
                                                const metodoAgente = deposit.agent.methods?.find(m => m.methodId === deposit.method?.methodId);
                                                if (!metodoAgente) return <li className="list-group-item">No se encontraron métodos de pago.</li>;
                                                return (
                                                    <>
                                                        {renderListItem("Teléfono", metodoAgente.phone)}
                                                        {renderListItem("Email", metodoAgente.email)}
                                                        {renderListItem("Documento", metodoAgente.document)}
                                                        {renderListItem("Banco", metodoAgente.bank)}
                                                        {renderListItem("A nombre de", metodoAgente.userName)}
                                                        {renderListItem("Número de cuenta", metodoAgente.accountNumber)}
                                                    </>
                                                );
                                            })()}
                                        </ul>
                                    </div>

                                    {!deposit.operationNumber && <div className="text-center">
                                        <button
                                            className="btn btn-success btn-lg"
                                            onClick={() => setShowModal(true)}
                                        >
                                            <i className="bi bi-check-circle me-2" />
                                            Ya he realizado el depósito
                                        </button>
                                    </div>}
                                </>
                            ) : (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <h5 className="mt-3">Esperando por un comerciante verificado</h5>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {deposit?.agent &&
                    <div className="col-6">
                        <div className="chat-input-container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="card chatsContainer " ref={chatRef}>
                                        {chats?.map((item, i) => {
                                            return <div key={i} className={messageOwner(item, user?.user?._id) ? "left-msg-w" : "right-msg-w"}>
                                                <div className={messageOwner(item, user?.user?._id) ? "left-msg" : "right-msg"}>
                                                    <p className="item-msg" style={{ whiteSpace: "pre-line" }}>
                                                        {item.message}
                                                    </p>
                                                    <div className="hora-msg">{hour(item.createdAt)}</div>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                    <div className="card bg-dark-2 shadow-sm mt-3">
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
                                                        disabled={!deposit?.agent}
                                                    />
                                                    <div className="chat-icons ms-2 d-flex gap-2">
                                                        {/*  <i className="bi bi-paperclip fs-4" /> */}
                                                        <button disabled={!deposit?.agent} className="border-0 bg-transparent"> <i className="bi bi-arrow-up-circle-fill fs-3 text-primary" /></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>}
            </div>

            <Modal show={showModal}>
                <div className="p-4">
                    <h4 className="text-center mb-4">Ingresar Número de Operación</h4>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Número de operación"
                            value={operationNumber}
                            onChange={(e) => setOperationNumber(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-center gap-2 mt-4">
                        <button
                            className="btn btn-secondary"
                            onClick={() => setShowModal(false)}
                        >
                            Cancelar
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => sendOperationNumber()}
                        >
                            Enviar
                        </button>
                    </div>
                </div>
            </Modal>



        </div>
    );
}

export default Comercio
