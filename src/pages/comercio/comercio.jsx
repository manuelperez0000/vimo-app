import PerfilImage from "../../components/perfil-image"
import { chat } from "./utils"

const Comercio = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3 p-4 chat-c">
                    <div className='mb-3'>
                        <div className='principal-msg' >
                            <div className="d-flex gap-4">
                                <PerfilImage />
                                <div>
                                    <div className="">
                                        Manuel Perez
                                    </div>
                                    <div className="text-center">
                                        Comerciante verificado:
                                        <span className="text-warning mx-2">
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star" />
                                            <i className="mx-2">556</i>
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <hr />
                            <p>
                                <div className="mb-3">
                                    Para realizar un deposito en (VES) con el metodo (Pago Movil), debe usar los siguientes datos
                                </div>
                                <div className="text-sm">

                                    <div>
                                        <b>Telefono:</b> 04141220527  <i className="bi bi-copy mx-2 copy" />
                                    </div>
                                    <div>
                                        <b>Cedula:</b> 20876543 <i className="bi bi-copy mx-2 copy" />
                                    </div>
                                    <div>
                                        <b>Banco:</b> Venezuela (0102)
                                    </div>

                                </div>
                            </p>

                            <div className="text-center">
                                <button className="btn btn-success"> <i className="bi bi-check" /> Ya he realizado el deposito</button>
                            </div>
                        </div>
                    </div>
                    {chat.map((item) => {
                        return <div className={item.owner ? 'left-msg-w' : 'right-msg-w'}>
                            <div className={item.owner ? 'left-msg' : 'right-msg'}>

                                <p className="item-msg" style={{ whiteSpace: 'pre-line' }}>{item.msg}</p>
                                <div className="hora-msg">9:33 a. m.</div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
            <div className="chat">
                <div className="container">
                    <div className="row">
                        <div className="col-6 offset-3 mb-3">
                            <div className="card px-2 pb-2 shadow">
                                <input type="text" placeholder="Enviar un mensaje al comerciante" name="comercio" className="form-control-transparent mt-4" autoFocus />
                                <div className="flex-between ">
                                    <div className="chat-icons"> <i className="bi bi-paperclip" /> </div>
                                    <div className="chat-icons"> <i className="bi bi-arrow-up-circle-fill" /> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comercio