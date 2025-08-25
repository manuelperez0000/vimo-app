import PropTypes from "prop-types"
import Modal from "../../components/modals/Modal"
import useModalRetirar from "./useModalRetirar"

const ModalRetirar = ({ setModal, modal }) => {

    const { components, selectedComponent, telefono, selectedMethod, 
        sendMethodForm, handleTelefonoChange, method } = useModalRetirar({ setModal })

    return (
        <Modal show={modal}>
            <div className="modal-header">
                <h5 className="modal-title mb-4">Agregar metodo de retiro</h5>
            </div>

            {/* Lista de metodos disponibles */}
            Elija un metodo de retiro

            <form onSubmit={sendMethodForm} >

                <select onChange={(e) => selectedMethod(e)} name="metodo" className="form-select mb-4 mt-1">
                    <option value={null}> Elija un metodo </option>
                    {components}
                </select>

                <input type="hidden" name="metodo" value={method?.id} />
                <input type="hidden" name="currencyName" value={method?.currencyName} />
                <input type="hidden" name="abbreviation" value={method?.abbreviation} />
                <input type="hidden" name="currencyType" value={method?.type} />   

                {selectedComponent?.includes(1) && (<>
                    <span>Ingrese su numero de telefono</span>
                    <input required value={telefono} onChange={handleTelefonoChange} type="text" name="phone" placeholder={`Ingrese su numero de telefono`} className="form-control mb-4" />
                </>)}

                {selectedComponent?.includes(2) && (<>
                    <span>Ingrese su numero de cuenta</span>
                    <input required type="text" name="acountNumber" placeholder={`Ingrese su Numero de cuenta`} className="form-control mb-4" />
                </>)}

                {selectedComponent?.includes(3) && (<>
                    <span>Ingrese su Cedula de identidad</span>
                    <input required type="text" name="document" placeholder={`Ingrese su Cedula de identidad`} className="form-control mb-4" />
                </>)}

                {selectedComponent?.includes(4) && (<>
                    <span>Seleccione el tipo de cuenta</span>
                    <select name="accountType" className="form-select mb-4 mt-1">
                        <option value={null}>Seleccione el tipo de cuenta</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="corriente">Corriente</option>
                    </select>
                </>
                )}

                {selectedComponent?.includes(5) && (<>
                    <span>Ingrese el nombre del titular</span>
                    <input required type="text" name="userName" placeholder={`Ingrese el Nombre del titular`} className="form-control mb-4" />
                </>
                )}

                {selectedComponent?.includes(6) && (<>
                    <span>Seleccione su banco</span>
                    <select name="bank" id="banco" className="form-select mb-4 mt-1">
                        <option value={null}>Seleccione su banco</option>
                        <option value="BDV">Banco De Venezuela (0102)</option>
                        <option value="BANESCO">Banesco (0134)</option>
                        <option value="MERCANTIL">Mercantil (0105)</option>
                        <option value="PROVINCIAL">BVBA Provincial (0108)</option>
                        <option value="BNC">Banco Nacional de Credito BNC (0110)</option>
                        <option value="BICENTENARIO">Bicentenario (0112)</option>
                    </select>
                </>
                )}

                {selectedComponent?.includes(7) && (<>
                    <span>Ingrese su email</span>
                    <input required type="email" name="email" placeholder={`Ingrese su email`} className="form-control mb-4" />
                </>
                )}

                <div className="text-end">
                    <button className="btn btn-primary"> Agregar este metodo </button>
                </div>
            </form>
            <button onClick={() => setModal(false)}> cerrar </button>
        </Modal>
    )
}

ModalRetirar.propTypes = {
    setModal: PropTypes.func.isRequired,
    modal: PropTypes.bool.isRequired
}

export default ModalRetirar
