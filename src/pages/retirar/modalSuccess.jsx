import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const statusStyles = {
    pending: 'bg-warning',
    taken: 'bg-info',
    finished: 'bg-success',
    canceled: 'bg-danger',
};

const ModalSuccess = ({ modalSuccess, setModalSuccess }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        setModalSuccess(false);
        navigate('/mis-retiros');
    };

    const { amount, method, createdAt, status, operationNumber } = modalSuccess;
    const formattedDate = createdAt ? format(new Date(createdAt), "d 'de' MMMM 'de' yyyy", { locale: es }) : 'Fecha no disponible';
    const statusClassName = statusStyles[status] || 'bg-secondary';

    const getStatus = (status) => {
        if (status === 'pending') return <>
            <div>
                <i className='text-primary check bi bi-send-fill'></i>
            </div>
            <h3 className="modal-title w-100 text-center">Solicitud de retiro enviada</h3>
            En pocos minutos su pago sera procesado por nuestros comerciantes
        </>
        if (status === 'taken') return <>
            <div>
                <i className='text-primary check bi bi-cash'></i>
            </div>
            <h3 className="modal-title w-100 text-center">Orden tomada por un comerciante</h3>
            Su pago esta siendo procesado
        </>
        if (status === 'canceled') return <>
            <div>
                <i className='text-danger check bi bi-x-circle-fill'></i>
            </div>
            <h3 className="modal-title w-100 text-center">Solicitud de retiro cancelada</h3>
            Su orden de retiro a sido cancelada, los fondos han regresado automaticamente a su cuenta
        </>
        if (status === 'finished') return <>
            <div>
                <i className='text-success check bi bi-check-circle-fill'></i>
            </div>
            <h3 className="modal-title w-100 text-center">Retiro exitoso</h3>
            El pago a sido realizado por nuestros comerciantes
            <div>  {operationNumber && <h4 className='nroComprobante'>Nro de comprobante: {operationNumber}</h4>} </div>
        </>
    }

    if (modalSuccess) return (
        <div className="bg-modal fade show" style={{ display: 'block' }} tabIndex="-1">
            <div className="modal-body">
                <div className="modal-content">
                    <div className="modal-header d-block text-center">
                        {getStatus(modalSuccess?.status)}
                    </div>
                    <div className="bg-light p-3 my-4">
                        <div className="d-flex justify-content-between">
                            <span className="fw-bold">Monto:</span>
                            <span>{amount ? `$${Number(amount).toFixed(2)}` : 'N/A'}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className="fw-bold">Método de Pago:</span>
                            <span>{method?.currencyName || 'n/a'} ({method.abbreviation})</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className="fw-bold">Fecha:</span>
                            <span>{formattedDate}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="fw-bold">Status:</span>
                            <span className={`badge ${statusClassName}`}>
                                {status || 'N/A'}
                            </span>
                        </div>
                    </div>
                    <div className="modal-footer d-flex flex-column gap-2">
                        <button
                            onClick={handleNavigate}
                            className="btn btn-primary w-100"
                        >
                            Ver mis retiros
                        </button>
                        <button
                            onClick={() => setModalSuccess(false)}
                            className="btn btn-secondary w-100"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

ModalSuccess.propTypes = {
    modalSuccess: PropTypes.object,
    setModalSuccess: PropTypes.func.isRequired
}

export default ModalSuccess;
