import useLoading from "./useLoading"

const Loader = () => {

    const { loading } = useLoading()

    if (loading) return (
        <div className="loader-back">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader