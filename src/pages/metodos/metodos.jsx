import MetodoModal from './MetodoModal';
import useMetodo from './useMetodo';

const Metodos = () => {
    const { setShowModal } = useMetodo();

    return (
        <div className="container mt-4">
            <MetodoModal />
            <div className="row">
                <div className="col-6 offset-3 p-4 chat-c">
                    <div className='mb-3'>
                        <div className='principal-msg'>
                            <h1>Métodos de Pago</h1>
                            <p>Aquí puedes ver los métodos de pago disponibles.</p>
                        </div>
                    </div>

                    <div className="mb-3">
                        {/* {methods.map((metodo) => (
                            <div key={metodo._id} className="card mb-2">
                                <div className="card-body d-flex justify-content-between">
                                    <div>
                                        <h5 className="card-title">{metodo.name}</h5>
                                        <p className="card-text">{metodo.description}</p>
                                    </div>
                                    <div>
                                        <button className="btn btn-sm btn-warning me-2">Editar</button>
                                        <button className="btn btn-sm btn-danger">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        ))} */}
                    </div>

                    <button onClick={()=>setShowModal(true)} className="btn btn-primary">+ Agregar Método de pago</button>
                </div>
            </div>
        </div>
    );
};

export default Metodos;
