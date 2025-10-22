import PayMethodsModal from './payMetodsModal';

import usePayMethods from './usePayMethods';
export default function PayMethods() {

    const { setModal, payMethods, deleteMethod } = usePayMethods();

    return (<div className="container mt-5 p-4">
        {console.log(payMethods)}
        <PayMethodsModal />
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h1>Métodos de Pago admin</h1>
                        <p>Aquí puedes administrar los métodos de pago.</p>
                    </div>
                    <div>
                        <button onClick={() => setModal(true)} className="btn btn-primary">  + Agregar Nuevo</button>
                    </div>
                </div>
            </div>
            <div className="col-12">
                {payMethods.length === 0 ? (
                    <div className='alert alert-warning'>No hay métodos de pago disponibles.</div>
                ) : (
                    <ul>
                        {payMethods?.map((method, index) => (
                            <div className='card p-3 mb-2' key={index}>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <h4>{method.currencyName} - {method.abbreviation}</h4>
                                        <div><strong>Tipo:</strong> {method.currencyType}</div>
                                    </div>
                                    <div>
                                        <div>
                                            <button className='btn btn-danger' onClick={() => deleteMethod(method)}>Delete</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        ))}
                    </ul>
                )}
            </div>
        </div>

    </div>)
}