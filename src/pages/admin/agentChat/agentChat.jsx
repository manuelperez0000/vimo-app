//obtener el id del deposito de la url
import { useParams } from "react-router-dom"
import request from "../../../libs/request";
import urlApi from "../../../utils/urlApi";
import { useEffect, useState } from "react";
import PerfilImage from "../../../components/perfil-image";

const AgentChat = () => {

  const { depositId } = useParams();
  const [deposit, setDeposit] = useState(null);

  useEffect(() => {
    const fetchDeposit = async () => {
      try {
        const response = await request.get(`${urlApi}/deposit/client/${depositId}`);
        setDeposit(response.data.body);
        console.log(response.data.body);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDeposit();
  }, [depositId]);

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-6 offset-3 p-4 chat-c">
          <div className='mb-3'>
            <div className='principal-msg' >
              <div className="d-flex gap-4">
                <PerfilImage />
                <div>
                  <div className="">
                    {deposit?.userFrom.name}
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
              <div>
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
              </div>

              <div className="text-center">
                <button className="btn btn-success"> <i className="bi bi-check" /> Ya he realizado el deposito</button>
              </div>
            </div>
          </div>
          {deposit && deposit?.chat?.length > 0 && deposit.chat.map((item, i) => {
            return <div key={i} className={item.owner ? 'left-msg-w' : 'right-msg-w'}>
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

export default AgentChat