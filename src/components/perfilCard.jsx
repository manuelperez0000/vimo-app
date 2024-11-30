import PerfilImage from "./perfil-image"

const PerfilCard = () => {
    return (
        <div className="col-3 mb-3">
            <div className="x-center p-2 card fast-send">
                <PerfilImage />
                <span className="text-center">
                    Manuel Jose Perez Mata
                </span>
            </div>
        </div>
    )
}

export default PerfilCard