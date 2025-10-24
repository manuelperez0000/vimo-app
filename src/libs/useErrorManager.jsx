import useNotify from "./notify/notify"

const useErrorManager = () => {
    const { notify, nonError = "Ocurrio un error desconocido" } = useNotify()
    return (error) => {
        if (error?.response?.data?.message) {
            notify.error(error?.response?.data?.message)
        } else if (error?.message) {
            notify.error(error.message)
        } else {
            console.error(error)
            notify.error(nonError)
        }
    }
}

export default useErrorManager