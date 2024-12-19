import useNotify from "./notify/notify"

const errorManager = (error) => {
    const { notify } = useNotify()
    if (error?.response?.data?.message) {
        notify.warn(error?.response?.data?.message)
    } else if (error?.message) {
        notify.warn(error.message)
    }
}

export default errorManager