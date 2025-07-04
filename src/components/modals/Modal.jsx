const Modal = ({ children, show }) => {
    if (show) return (
        <div className="bg-modal">
            <div className="modal-body">
                {children}
            </div>
        </div>
    )
}

export default Modal