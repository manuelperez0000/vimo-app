import { useEffect } from "react"
import Logo from "../../../components/logo.jsx"
import useConfirmStore from "../useConfirmStore"
import useEnviar from "../useEnviar"
import useUserStorGlobal from "../../../globals/useUserStoreGlobal"

const ConfirmModal = () => {

    const { user } = useUserStorGlobal()

    const { modalConfirm, setModalConfirm, dataModalConfirm, setDataModalConfirm, handleCheck, checked } = useConfirmStore()
    const { enviar } = useEnviar()

    const close = () => {
        setModalConfirm(false)
        setDataModalConfirm({})
    }

    useEffect(() => {
        //obtener contactos
        console.log("Contacts", user.contacts.map((c) => c.email))
    }, [])

    if (modalConfirm) return (
        <div className="bg-modal">
            <div className="body-modal">
                <p className="text-center text-gray-2">
                    Confirmacion de Envio
                </p>
                <div className="text-center">
                    <Logo h={80} type={2} />
                </div>
                <div className="mt-4 text-gray-1">
                    Estas enviando:
                </div>
                <div className="text-gray-1">
                    <h1> $ {dataModalConfirm.amount} USD </h1>
                </div>
                <div className="text-gray-1">
                    Direccion:
                    <h4 className="text-gray-1">
                        {dataModalConfirm.email}
                    </h4>
                </div>

                <div className="mt-5">
                    <button onClick={() => enviar({ dataModalConfirm, checked })} className="btn btn-primary w-100"> Confirmar Envio</button>
                </div>
                <div className="text-gray-1 mt-2 d-flex justify-content-end gap-2">
                    {user.contacts.map((c) => c.email).includes(dataModalConfirm.email) ? <span className="border px-3">Contacto Registrado <i className="text-success bi bi-check"/> </span> : <>
                        <label htmlFor="check"> Guardar en contactos </label>
                        <input type="checkbox" onChange={() => handleCheck()} checked={checked} name="check" id="check" className="form-check" />
                    </>}
                </div>
                <div className="text-end mt-4">
                    <button className="btn btn-secondary" onClick={close}> Cancelar </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal