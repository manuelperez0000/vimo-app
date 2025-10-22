import MetodoModal from './MetodoModal';
import useMetodo from './useMetodo';
import bancos from '../../store/bancos.json'
const Metodos = () => {
    const { setShowModal, userMethods, deleteMethod } = useMetodo();

    return (
        <div className="container-fluid mt-4">
            <MetodoModal />
            <div className="row">
                <div className="mt-3 col-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2">
                    <div className='mb-3'>
                        <div className='card px-3 py-2'>
                            <div className='flex-between'>
                                <h3>Métodos de Pago de clientes</h3>
                                <button onClick={() => setShowModal(true)} className="btn btn-primary">+ Agregar Método de pago</button>
                            </div>
                            <p>Aquí puedes ver los métodos de pago disponibles.</p>
                        </div>
                    </div>

                    <div className="mb-3">
                        {userMethods.map((metodo) => (
                            <div key={metodo._id} className="card mb-2">
                                <div className="card p-4">
                                    <div className='flex-between'>
                                        <h4 className="card-title">{metodo.currencyName}</h4>
                                        <div className='d-flex'>
                                            {/* <button className="btn btn-sm btn-warning me-2">Editar</button> */}
                                            <button onClick={() => deleteMethod(metodo._id)} className="btn btn-sm btn-danger">Eliminar</button>
                                        </div>
                                    </div>
                                    <div>
                                        {metodo?.email && <div><b>Email</b>: {metodo.email}</div>}
                                        {metodo?.phone && <div><b>Telefono:</b> {metodo.phone}</div>}
                                        {metodo?.accountType && <div><b>Tipo de cuenta:</b> {metodo.accountType}</div>}
                                        {metodo?.userName && <div><b>A nombre:</b> {metodo.userName}</div>}
                                        {metodo?.accountNumber && <div><b>Nro:</b> {metodo.accountNumber}</div>}
                                        {metodo?.document && <div><b>Cedula:</b> {metodo.document}</div>}
                                        {metodo?.bank && <div><b>Banco:</b>({metodo.bank}) {bancos.find(bank => bank.codigo == metodo.bank).banco}</div>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Metodos;
