import PropTypes from "prop-types"
import Modal from "../../components/modals/Modal"
import useModalRetirar from "./useModalRetirar"
import methodsComponents from '../../store/methodsComponents.json'

const ModalRetirar = ({ setModal, modal }) => {

    const { components, selectedMethod,
        sendMethodForm, selectedComponent, method } = useModalRetirar({ setModal })

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



                

                {selectedComponent && (
                    <div>
                        {selectedComponent.map(componentId => {
                            const component = methodsComponents.components.find(c => c.id === componentId)
                            if (!component) return null

                            const name = methodsComponents.dictionaryComponets[componentId - 1]
                            return (
                                <div key={component.id}>
                                    <label htmlFor={name}>{component.name}</label>
                                    <input
                                        type={component.type}
                                        name={name}
                                        id={name}
                                        placeholder={component.name}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                            )
                        })}
                    </div>
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
