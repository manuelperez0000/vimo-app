const Movimientos = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 py-4">
          <section>
            <table className="table">
              <thead>
                <tr className="text-movements">
                  <th className="text-movements">Fecha</th>
                  <th className="text-movements">Referencia</th>
                  <th className="text-movements">Descripcion</th>
                  <th className="text-movements">Debito / Credito</th>
                  <th className="text-movements">Monto</th>
                  <th className="text-movements">Saldo</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td className="text-movements-2">123123 - 123</td>
                  <td className="text-movements-2">iouwer83iji</td>
                  <td className="text-movements-2">Retiro Banco de venezuela</td>
                  <td className="text-danger">Debito</td>
                  <td className="text-danger">$-34,34</td>
                  <td className="text-movements-2">$3.434,34</td>
                </tr>
                <tr>
                  <td className="text-movements-2">123123 - 123</td>
                  <td className="text-movements-2">iouwer83iji</td>
                  <td className="text-movements-2">Retiro Banco de venezuela</td>
                  <td className="text-success">Credito</td>
                  <td className="text-success">$34,34</td>
                  <td className="text-movements-2">$3.434,34</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Movimientos