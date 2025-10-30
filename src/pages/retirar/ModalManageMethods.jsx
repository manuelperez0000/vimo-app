import PropTypes from "prop-types"
import useModalManageMethods from "./useModalManageMethods"
import methodsComponents from '../../store/methodsComponents.json'
import bancos from '../../store/bancos.json'
import useRetirar from "./useRetirar"
import useRetirarStore from "./useRetirarStore"

const ModalManageMethods = () => {

    const { modalManage, setModalManage, editableMethod, setEditableMethod } = useRetirarStore()
    const { userMethods } = useRetirar()
    const { sendMethodUpdateForm, selectedComponent, method, deleteMethod, formValues, setFormValues } = useModalManageMethods({ setModalManage, editableMethod, setEditableMethod })

    if (modalManage) return (
        <div className="bg-modal">
            <div className="withdrawal-modal bg-white rounded-lg shadow-xl">
                <div className="modal-header bg-primary text-white py-4 rounded-t-lg position-relative">
                    <h5 className="modal-title mb-0 text-center w-100 font-semibold text-xl">
                        <i className="fas fa-list me-2"></i>
                        Gestionar métodos de retiro
                    </h5>
                    <button
                        type="button"
                        className="btn-close-modal"
                        onClick={() => { setModalManage(false); setEditableMethod(null); }}
                        aria-label="Close"
                    > <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="px-5 py-5">
                    {!editableMethod ? (
                        <>
                            <p className="text-muted text-center mb-4 fs-5">Tus métodos de retiro</p>
                            {userMethods.length > 0 ? (
                                <div className="list-group">
                                    {userMethods.map((m, i) => (
                                        <div key={i} className="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 className="mb-1">{m?.currencyName} ({m?.abbreviation})</h6>
                                            </div>
                                            <div>
                                                <button className="btn btn-sm btn-outline-primary me-2" onClick={() => setEditableMethod(m)}>
                                                    <i className="fas fa-edit"></i> Editar
                                                </button>
                                                <button className="btn btn-sm btn-outline-danger" onClick={() => deleteMethod(m._id)}>
                                                    <i className="fas fa-trash"></i> Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-center">No tienes métodos de retiro registrados.</p>
                            )}
                        </>
                    ) : (
                        <>
                            <p className="text-muted text-center mb-4 fs-5">Editar método de retiro</p>

                            <form onSubmit={sendMethodUpdateForm}>
                                <div className="mb-4">
                                    <label htmlFor="metodo" className="form-label fw-semibold text-gray-700">
                                        Método de retiro (no editable)
                                    </label>
                                    <input
                                        value={`${editableMethod.currencyName} (${editableMethod.abbreviation})`}
                                        className="form-control"
                                        disabled
                                    />
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
                                                            value={formValues[name] || ''}
                                                            onChange={(e) => setFormValues(prev => ({ ...prev, [name]: e.target.value }))}
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
                                                            value={formValues[name] || ''}
                                                            onChange={(e) => setFormValues(prev => ({ ...prev, [name]: e.target.value }))}
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
                                                            value={formValues[name] || ''}
                                                            onChange={(e) => setFormValues(prev => ({ ...prev, [name]: e.target.value }))}
                                                        />
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                )}

                                <div className="d-grid mt-4 gap-2">
                                    <button type="submit" className="btn btn-primary btn-lg rounded-pill shadow-sm">
                                        <i className="fas fa-save me-2"></i>
                                        Actualizar método
                                    </button>
                                    <button type="button" className="btn btn-secondary btn-lg rounded-pill" onClick={() => setEditableMethod(null)}>
                                        <i className="fas fa-arrow-left me-2"></i>
                                        Volver a lista
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

ModalManageMethods.propTypes = {
    setModal: PropTypes.func.isRequired,
    modal: PropTypes.bool.isRequired,
    editableMethod: PropTypes.object,
    setEditableMethod: PropTypes.func.isRequired
}

export default ModalManageMethods
