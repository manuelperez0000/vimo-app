import PropTypes from "prop-types"
import useModalRetirar from "./useModalRetirar"
import methodsComponents from '../../store/methodsComponents.json'
import bancos from '../../store/bancos.json'

const ModalRetirar = ({ setModal, modal }) => {
   
    const { components, selectedMethod,
        sendMethodForm, selectedComponent, method } = useModalRetirar({ setModal, modal })

    if (modal) return (
        <div className="bg-modal">
            <div className="withdrawal-modal bg-white rounded-lg shadow-xl">
                <div className="modal-header bg-primary text-white py-4 rounded-t-lg position-relative">
                    <h5 className="modal-title mb-0 text-center w-100 font-semibold text-xl">
                        <i className="fas fa-money-bill-wave me-2"></i>
                        Agregar método de retiro
                    </h5>
                    <button
                        type="button"
                        className="btn-close-modal"
                        onClick={() => setModal(false)}
                        aria-label="Close"
                    > <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="px-5 py-5">
                    <p className="text-muted text-center mb-4 fs-5">Elige un método de retiro disponible</p>

                    <form onSubmit={sendMethodForm}>
                        <div className="mb-4">
                            <label htmlFor="metodo" className="form-label fw-semibold text-gray-700">
                                Método de retiro
                            </label>
                            <select
                                value={method?.methodId || ""}
                                onChange={(e) => selectedMethod(e)}
                                name="metodo"
                                id="metodo"
                                className="form-select form-select-lg border-primary"
                                required
                            >
                                <option value="" disabled> Selecciona un método </option>
                                {components}
                            </select>
                        </div>

                        <input type="hidden" name="metodo" value={method?.id} />
                        <input type="hidden" name="currencyName" value={method?.currencyName} />
                        <input type="hidden" name="abbreviation" value={method?.abbreviation} />
                        <input type="hidden" name="currencyType" value={method?.type} />

                        {selectedComponent && (
                            <div className="row g-3">
                                {selectedComponent.map(componentId => {
                                    const component = methodsComponents.components.find(c => c.id === componentId)
                                    if (!component) return null

                                    const name = methodsComponents.dictionaryComponets[componentId - 1]

                                    if (component.id === 6) {
                                        // Banco
                                        return (
                                            <div key={component.id} className="col-12">
                                                <label htmlFor={name} className="form-label fw-semibold text-gray-700">
                                                    {component.name}
                                                </label>
                                                <select
                                                    name={name}
                                                    id={name}
                                                    className="form-select border-primary"
                                                    required
                                                >
                                                    <option value="">Selecciona un banco</option>
                                                    {bancos.map(b => (
                                                        <option key={b.codigo} value={b.banco}>{b.banco}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        )
                                    } else if (component.id === 4) {
                                        // Tipo de cuenta
                                        return (
                                            <div key={component.id} className="col-12">
                                                <label htmlFor={name} className="form-label fw-semibold text-gray-700">
                                                    {component.name}
                                                </label>
                                                <select
                                                    name={name}
                                                    id={name}
                                                    className="form-select border-primary"
                                                    required
                                                >
                                                    <option value="">Selecciona tipo de cuenta</option>
                                                    <option value="ahorro">Ahorro</option>
                                                    <option value="corriente">Corriente</option>
                                                </select>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div key={component.id} className="col-12">
                                                <label htmlFor={name} className="form-label fw-semibold text-gray-700">
                                                    {component.name}
                                                </label>
                                                <input
                                                    type={component.type}
                                                    name={name}
                                                    id={name}
                                                    placeholder={`Ingresa ${component.name.toLowerCase()}`}
                                                    className="form-control border-primary"
                                                    required
                                                />
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        )}

                        <div className="d-grid mt-4">
                            <button type="submit" className="btn btn-primary btn-lg rounded-pill shadow-sm">
                                <i className="fas fa-plus me-2"></i>
                                Agregar este método
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

ModalRetirar.propTypes = {
    setModal: PropTypes.func.isRequired,
    modal: PropTypes.bool.isRequired
}

export default ModalRetirar
