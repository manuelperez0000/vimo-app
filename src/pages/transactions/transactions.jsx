import useTransactions from "./useTransactions"

const Movimientos = () => {
  
  const user = localStorage.getItem('user')
  const myEamil = user && JSON.parse(user).user.email

  const { transactions, formatFecha } = useTransactions()


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 offset-1 py-4">
          <section>
            <div className="title-section">Movimientos</div>
            <table className="table">
              <thead>
                <tr className="text-movements">
                  <th className="text-movements">Fecha</th>
                  <th className="text-movements">Nro de Operacion</th>
                  <th className="text-movements">Receptor</th>
                  <th className="text-movements">Tipo de Operacion</th>
                  <th className="text-movements">Monto</th>
                </tr>
              </thead>
              <tbody>

                {transactions?.length > 0 && transactions.map((t) => {
                  return <tr key={t._id} className="tr-move">
                    <td> {formatFecha(t.createdAt)} </td>
                    <td> {t._id} </td>
                    <td> {t.toEmail} </td>
                    <td>
                      {myEamil ? myEamil  === t.fromEmail ? <span className="text-danger">Enviado</span> : <span className="text-success">Recibido</span> : ""}
                    </td>
                    <td className='text-end'>
                      <span className={t.fromEmail === myEamil ? "text-danger" : "text-success"}>
                        {t.fromEmail === myEamil && '-'} {t.amount.toFixed(2)}$
                      </span>
                    </td>
                  </tr>
                })}

              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div >
  )
}

export default Movimientos