import useEnviarStore from "../useEnviarStore"
import Logo from "../../../components/logo"

const SuccessModal = () => {
    const { successModal, successData } = useEnviarStore()

    if (successModal) return (
        <div className="bg-modal">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2 mt-5">
                        <div className="body-modal overflow-wrap">


                            <div className="text-center bg-blue-1 rounded p-4">
                                <Logo type={1} h={50} />
                            </div>
                            <div className="text-center check-icon">
                                <i className="bi bi-check-circle-fill text-success " />
                            </div>
                            <div className="mt-1">
                                <h4 className="text-center text-gray-1">Enviado con exito</h4>
                            </div>

                            <div className="text-lg text-center mt-3 text-gray-1">
                                <h1>
                                    $ {successData.amount} USD
                                </h1>
                                a <b>{successData?.name}</b> <br />
                                direccion <b> {successData.email} </b>
                            </div>

                            <div className="mt-3 text-end">
                                <a href="http://localhost:5173/dashboard" className="btn border hover-red">  Continuar </a>
                            </div>
                        </div>
                    </div></div></div></div>
    )
}

export default SuccessModal