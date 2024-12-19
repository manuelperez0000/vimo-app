import { useState } from "react"
import useApp from "../../globals/useApp"
const useEnviar = () => {

    const [value, setValue] = useState('0.00')
    const { user } = useApp()
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

    return {
        handleNumberInput,
        user,
        handleKeyDown,
        value

    }
}

export default useEnviar