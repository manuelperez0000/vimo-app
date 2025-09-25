// eslint-disable-next-line react/prop-types
const ModalTasa = ({modalVisible,setModalVisible})=> {

    if(modalVisible){

        return <div className="bg-modal">
            <div className="modal d-block" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button onClick={() => setModalVisible(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default ModalTasa;