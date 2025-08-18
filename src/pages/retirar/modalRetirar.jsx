import Modal from "../../components/modals/Modal"

// eslint-disable-next-line react/prop-types
const ModalRetirar = ({ setModal, modal }) => {

    return (
        <Modal show={modal}>
            <div className="modal-header">
                <h5 className="modal-title mb-4">Agregar metodo de retiro</h5>
            </div>

            {/* Lista de metodos disponibles */}
            Elija un metodo de retiro
            <select className="form-select mb-4 mt-1">
                <option value="">Binance</option>
                <option value="">Bolivares</option>
                <option value="">Zelle</option>
            </select>
            {/* si es binance pido el correo */}
            <input type="text" placeholder="Correo de Binance" className="form-control mb-4" />
            {/* si es bolivares pido si es pago movil o transferencia pido el correo */}
            {/* si es transferencia doy a elegir los bancos disponibles */}
            <select className="form-select mb-4 mt-1">
                <option value="">Pago Movil</option>
                <option value="">Transferencia</option>
            </select>
            Datos del Pago Movil
            cedula <input type="text" placeholder="Cedula" className="form-control mb-4" />
            Telefono <input type="text" placeholder="Telefono" className="form-control mb-4" />
            banco <select className="form-select mb-4 mt-1">
                <option value="">Banco 1</option>
                <option value="">Banco 2</option>
                <option value="">Banco 3</option>
            </select>
            <div>
                <button className="btn btn-primary"> Guardar metodo de retiro </button>
            </div>
            <div className="modal-footer">
                <button onClick={() => setModal(false)}> close </button>
            </div>
        </Modal>
    )
}

export default ModalRetirar
