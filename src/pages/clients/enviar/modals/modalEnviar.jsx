import useEnviarStore from "../useEnviarStore"
import Logo from "../../../../components/logo"

const ModalEnviar = () => {
    const { modal, setModal } = useEnviarStore()

    const close = () => {
        setModal(false)
        //reset variables
    }

    if (modal) return (
        <div className="bg-modal">
            <div className="body-modal mw">
                <div className="cancel-w">
                    <div className="cancel-btn text-end" onClick={close}>
                        <i className="bi bi-x cancel" />
                    </div>
                </div>
                <div className="mt-1">
                    <h4 className="text-center text-gray-1">Confirmacion de envio</h4>
                </div>
                <div className="text-center mt-4">
                    <Logo type={2} h={70} />
                </div>
                <div className="text-lg text-center mt-3 text-gray-1">
                    <div>
                        Esta eviando
                    </div>
                    <h1>
                        $ 45,00 USD
                    </h1>
                    a <b>Manuel Perez</b> <br />
                    direccion <b> manuelperez.0000@gmail.com2 </b>
                </div>
                <div className="mt-5">
                    <button className="btn btn-primary w-100"> Confirmar Envio2</button>
                </div>
                
                <div className="mt-3 text-end">
                    <button onClick={close} className="btn border hover-red"> <i className="bi bi-x" /> cancelar </button>
                </div>
            </div>
        </div>
    )
}

export default ModalEnviar