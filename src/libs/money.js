const money = (monto) => {

    return (Math.round((monto) * 100) / 100).toFixed(2)
}

export default money