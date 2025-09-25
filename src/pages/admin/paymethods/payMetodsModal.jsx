import usePayMethods from "./usePayMethods";

const PayMethodsModal = () => {

    const { modal, setModal, selectedMethod, setSelectedMethod, saveMethod, getMethod, methods } = usePayMethods();

    if (modal) return (<div className="bg-modal">
        <div className="modal-body">

            <div className="modal-header d-flex justify-content-between align-items-center">
                <h5 className="modal-title">Agregar Método de Pago</h5>
                <button onClick={() => setModal(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-content p-4">
                tipo de metodo
                <select onChange={(e) => setSelectedMethod(e.target.value)} className="form-select mb-3" aria-label="Default select example">
                    <option value={0}> Elija un tipo</option>
                    {methods.map((method, index) => (
                        <option key={index} value={method.id}> {method.currencyName} {method.abbreviation}</option>
                    ))}
                </select>

                {selectedMethod != 0 && (
                    <form onSubmit={saveMethod}>
                        <div className="card p-3 mb-3 d-flex justify-content-between align-items-center">
                            <div>
                                <h2>{getMethod(selectedMethod)?.currencyName || ''}</h2>
                                <strong>{getMethod(selectedMethod)?.abbreviation || ''}</strong>
                                <span> {getMethod(selectedMethod)?.type || ''} </span>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </form>
                )}

            </div>
        </div>
    </div >)
}




export default PayMethodsModal;


 {/* <input value={getMethod(selectedMethod)?.currencyName || ''} name="currencyName" type="text" className="form-control" id="currencyName" /> */}

{/* {selectedMethod != 0 && getMethod(selectedMethod)?.components.map((component, index) => {
                                if (component === 6) {

                                    return <div key={index} className="mb-3">
                                        <label htmlFor={`component-${component}`} className="form-label">{getComponent(component)?.name}</label>
                                        <select className="form-select" aria-label="Default select example" id={`component-${component}`}>
                                            <option value="">Seleccione una opción</option>
                                            {bancos.map((banco, idx) => (
                                                <option key={idx} value={banco.codigo}>({banco.codigo}) {banco.banco}</option>
                                            ))}
                                        </select>
                                    </div>


                                } else if (component === 4) {
                                    return <div key={index} className="mb-3">
                                        <label htmlFor={`component-${component}`} className="form-label">{getComponent(component)?.name}</label>
                                        <select className="form-select" aria-label="Default select example" id={`component-${component}`}>
                                            <option value="">Seleccione una opción</option>
                                            <option value="ahorros">Ahorros</option>
                                            <option value="corriente">Corriente</option>
                                        </select>
                                    </div>
                                } else {
                                    return <div key={index} className="mb-3">
                                        <label htmlFor={`component-${component}`} className="form-label">{getComponent(component)?.name}</label>
                                        <input type={getComponent(component)?.type} className="form-control" id={`component-${component}`} placeholder={getComponent(component)?.name} />
                                    </div>
                                }

                            })} */}