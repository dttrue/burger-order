
const orderQueue = ({orders, completeOrder}) => {

    return (
        <div>
        <h2>Order Queue</h2>
        <ul className="list-group">
            {orders.map((order, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {order}
                    <button onClick={() => completeOrder(index)} className="btn btn-success">Complete Order</button>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default orderQueue