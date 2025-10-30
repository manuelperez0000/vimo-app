import PropTypes from 'prop-types';

const StatusButtons = ({ status, setStatus }) => {
    return (<>
        <button className={"ticketBtn " + (status === "pending" ? " active" : "")} onClick={() => setStatus('pending')}> Pendientes </button>
        <button className={"ticketBtn " + (status === "taken" ? " active" : "")} onClick={() => setStatus('taken')}> Tomados </button>
        <button className={"ticketBtn " + (status === "canceled" ? " active" : "")} onClick={() => setStatus('canceled')}> Cancelados </button>
        <button className={"ticketBtn " + (status === "finished" ? " active" : "")} onClick={() => setStatus('finished')}> Finalizados </button>
        <button className={"ticketBtn " + (status === "all" ? " active" : "")} onClick={() => setStatus('all')}> Todos </button>
    </>
    )
}

StatusButtons.propTypes = {
    status: PropTypes.oneOf(['pending', 'taken', 'canceled', 'finished', 'all']),
    setStatus: PropTypes.func.isRequired,
};

StatusButtons.defaultProps = {
    status: 'pending',
};

export default StatusButtons