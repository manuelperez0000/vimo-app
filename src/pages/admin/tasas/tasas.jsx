/* import methodsComponents from '../../../store/methodsComponents.json' */
import useTasas from './useTasas'

const Tasas = () => {

    const { editedTasas, sendForm, editTasas } = useTasas();

    return (
        <div className='p-4 m-5'>
            <div className='container'>
                <div className="row">
                    <div className="col-9 mx-auto">
                        <div className='d-flex flex-between align-items-center mb-4'>
                            <h3>Tasas</h3>
                        </div>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Currency</th>
                                    <th>Compra</th>
                                    <th>Venta</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {editedTasas.length > 0 && editedTasas.map((m, i) => {
                                    return <tr key={i}>
                                        <td><strong>{m.currencyName} ({m.abbreviation})</strong></td>
                                        <td>
                                            <input onChange={(e) => editTasas(i, 'buy', e.target.value)} className='form-control' step={0.01} type="number" defaultValue={m.buy || 0} />
                                        </td>
                                        <td>
                                            <input onChange={(e) => editTasas(i, 'sell', e.target.value)} className='form-control' step={0.01} type="number" defaultValue={m.sell || 0} />
                                        </td>
                                        <td>
                                            <button onClick={() => sendForm(m)} className='btn btn-sm btn-primary' type="submit"> Save </button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <div>

            </div>


        </div >
    )
}

export default Tasas