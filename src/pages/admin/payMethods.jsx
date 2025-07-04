import { useState } from "react";
import Modal from "../../components/modals/Modal";
import { saveAdminMethod } from "./controller";
export default function PayMethods() {

    const [modal, setModal] = useState(false)

    const saveMethod = async (e) => {
        e.preventDefault()
        const currencyName = e.target.currencyName.value
        const currencyType = e.target.currencyType.value
        const abbreviation = e.target.abbreviation.value
        const buyPrice = e.target.buyPrice.value
        const sellPrice = e.target.sellPrice.value

        //send post save method
        await saveAdminMethod({ currencyName, currencyType, abbreviation, buyPrice, sellPrice })
        e.target.reset()
        setModal(false)
    }

    return (<div className="container">
        <Modal show={modal}>
            <div className="modal-header d-flex justify-content-between align-items-center">
                <h5 className="modal-title">Agregar Método de Pago</h5>
                <button onClick={() => setModal(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <form onSubmit={saveMethod}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre del Método</label>
                    <input name="currencyName" type="text" className="form-control" id="currencyName" placeholder="Ej. Binance" />
                    <input name="currencyType" type="text" className="form-control" id="currencyType" placeholder="Ej. Fiat, crypto" />
                    <input name="abbreviation" type="text" className="form-control" id="abbreviation" placeholder="Abreviacion" />
                    <input name="buyPrice" step={0.01} type="number" className="form-control" id="buyPrice" placeholder="Precio de compra" />
                    <input name="sellPrice" step={0.01} type="number" className="form-control" id="sellPrice" placeholder="Precio de venta" />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>

        </Modal>
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h1>Métodos de Pago</h1>
                        <p>Aquí puedes administrar los métodos de pago.</p>
                    </div>
                    <div>
                        <button onClick={() => setModal(true)} className="btn btn-primary">  + Agregar Nuevo</button>
                    </div>
                </div>
            </div>
        </div>

    </div>)
}