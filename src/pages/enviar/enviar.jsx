import { useState } from "react"

const Enviar = () => {

  const [value, setValue] = useState('0.00')

  const handleNumberInput = (e) => {
    const input = e.target.value
    if (!input) {
      setValue('0.00')
      return
    }

    const numbers = input.replace(/[^0-9]/g, '')
    if (numbers.length > 8) return
    const numericValue = parseInt(numbers) / 100;
    const formattedValue = new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(numericValue)

    setValue(formattedValue)
  }

  const handleKeyDown = (e) => {
    // Permitir solo números y teclas de control
    if (!/^\d$/.test(e.key) &&
      !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
      e.preventDefault()
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 offset-3 py-4">
          <section>
            <div className="title-section">Enviar</div>
            <div className="flex-between">
              <h5>Saldo en tu cuenta</h5>
              <p className="font-saldo"> <b>USD</b> 34,77</p>
            </div>
            <form action="">  
              <div className="text-center">
                <div className="text-gray-2">
                  monto a enviar
                </div>
                <div className="flex-center mb-4">
                  <h1 className="formated text-dark">USD</h1>
                  <input autoFocus onChange={handleNumberInput}
                    onKeyDown={handleKeyDown}
                    placeholder="0.00" value={value} type="text" className="send-input" />
                </div>

                <div className="text-gray-2 mb-3">
                  Direccion a donde envia
                </div>
                <input type="email" className="form-control" placeholder="Ingresa el correo del receptor" />
                <div className="text-end my-3">
                  <a href="">
                    <i className="bi bi-list" /> Elegir de tus contactos
                  </a>
                </div>
                <div className="text-end">
                  <button className="btn btn-primary mt-4 px-5"> Enviar </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Enviar