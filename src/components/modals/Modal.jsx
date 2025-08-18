import PropTypes from 'prop-types';

const Modal = ({ children, show }) => {
    if (show) return (
        <div className="bg-modal">
            <div className="modal-body">
                {children}
            </div>
        </div>
    )
    return null;
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    children: PropTypes.node
};

export default Modal