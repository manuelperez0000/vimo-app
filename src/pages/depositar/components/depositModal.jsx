import DepositLoader from "./DepositLoader"
import useMethod from "../store"

const DepositModal = () => {
    const { depositModal } = useMethod()
    if (depositModal) return (
        <div className="bg-modal">
            <div className="text-center modal-body">
                En un momento sera atendido por uno de nuestros comerciantes
                verificado
                <div>
                    <DepositLoader />
                </div>
            </div>
        </div>
    )
}

export default DepositModal