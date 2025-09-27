import useMetodo from './useMetodo';
import methodsComponents from '../../store/methodsComponents.json'
import bancos from '../../store/bancos.json'

const MetodoModal = () => {

    const { showModal, setShowModal, methods, handleMethod, selectedMethod, colorBanco, handleSubmit } = useMetodo();

    if (showModal) return (
        <div className='bg-modal'>
            <div className="p-4 modal-body">
                <h2 className="mb-4">Agregar Nuevo Método de Pago</h2>
                <button onClick={() => setShowModal(false)}> cerrar </button>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Elija un metodo de la lista</label>
                        <select name="method" onChange={(e) => handleMethod(e.target.value)} className="form-select mb-2 mt-1">
                            <option value={'none'}>Elija un metodo de deposito</option>
                            {methods?.length > 0 && methods.map((method_tasa, i) => {
                                const _method = method_tasa.methodId
                                return <option key={i} value={JSON.stringify(method_tasa)}>
                                    {_method.currencyName} ({_method.abbreviation})
                                </option>
                            })}
                        </select>

                    </div>
                    <div className="mb-3">
                        <h4>Metodo seleccionado</h4>

                        {selectedMethod && selectedMethod.components.map((component, index) => {
                            if (component === 6) {

                                return <div key={index} className="mb-3">
                                    <label htmlFor={`component_${component}`} className="form-label">Banco</label>
                                    <select className="form-select" aria-label="Default select example" id={`component_${component}`}>
                                        <option value="">Elija su banco</option>
                                        {bancos.map((banco) => {
                                            return <option style={{ backgroundColor: colorBanco[banco.codigo] || 'white' }} key={banco.codigo} value={banco.codigo}> ( {banco.codigo} )  {banco.banco} </option>
                                        })}

                                    </select>
                                </div>


                            } else if (component === 4) {
                                return <div key={index} className="mb-3">
                                    <label htmlFor={`component_${component}`} className="form-label">{methodsComponents.components[component - 1].name}</label>
                                    <select className="form-select" aria-label="Default select example" id={`component_${component}`}>
                                        <option value="">Seleccione una opción</option>
                                        <option value="ahorros">Ahorros</option>
                                        <option value="corriente">Corriente</option>
                                    </select>
                                </div>
                            } else {
                                return <div key={index} className="mb-3">
                                    <label htmlFor={`component_${component}`} className="form-label">{methodsComponents.components[component - 1].name}</label>
                                    <input type={methodsComponents.components[component - 1].type} className="form-control" id={`component_${component}`} placeholder={methodsComponents.components[component - 1].name} />
                                </div>
                            }

                        })}

                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Agregar</button>
                </form>
            </div>
        </div>
    );
};

export default MetodoModal;
