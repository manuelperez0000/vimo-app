import useMetodo from './useMetodo';

const MetodoModal = () => {

    const { showModal, setShowModal, methods, getMethod, selectedMethod } = useMetodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert()
    };

    if (showModal) return (
        <div className='bg-modal'>
            <div className="p-4 modal-body">
                <h2 className="mb-4">Agregar Nuevo Método de Pago</h2>
                <button onClick={() => setShowModal(false)}> cerrar </button>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Elija un metodo de la lista</label>
                        <select name="method" onChange={(e) => getMethod(e.target.value)} className="form-select mb-2 mt-1">
                            <option value={'none'}>Elija un metodo de deposito</option>
                            {methods?.length > 0 && methods.map((tasa, i) => {
                                const _method = tasa.methodId
                                return <option key={i} value={JSON.stringify(tasa)}>
                                    {_method.currencyName} ({_method.abbreviation})
                                </option>
                            })}
                        </select>

                    </div>
                    <div className="mb-3">
                        <h4>Metodo seleccionado</h4>
                        {selectedMethod && selectedMethod != 0 && getMethod(selectedMethod)?.components.map((component, index) => {
                            if (component === 6) {

                                return <div key={index} className="mb-3">
                                    <label htmlFor={`component-${component}`} className="form-label">{/* getComponent(component)?.name */}</label>
                                    <select className="form-select" aria-label="Default select example" id={`component-${component}`}>
                                        <option value="">Seleccione una opción</option>
                                        {/* {bancos.map((banco, idx) => (
                                            <option key={idx} value={banco.codigo}>({banco.codigo}) {banco.banco}</option>
                                        ))} */}
                                    </select>
                                </div>


                            } else if (component === 4) {
                                return <div key={index} className="mb-3">
                                    <label htmlFor={`component-${component}`} className="form-label">{/* getComponent(component)?.name */}</label>
                                    <select className="form-select" aria-label="Default select example" id={`component-${component}`}>
                                        <option value="">Seleccione una opción</option>
                                        <option value="ahorros">Ahorros</option>
                                        <option value="corriente">Corriente</option>
                                    </select>
                                </div>
                            } else {
                                return <div key={index} className="mb-3">
                                    <label htmlFor={`component-${component}`} className="form-label">{/* getComponent(component)?.name */}</label>
                                    <input /* type={ getComponent(component)?.type} */ className="form-control" id={`component-${component}`} placeholder={3/* getComponent(component)?.name */} />
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
