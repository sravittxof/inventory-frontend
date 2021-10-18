import { Link } from "react-router-dom";

const OrderIndex = (props) => {

    const ordersMap = props.orders.map((order, idx) => 
        <div key={idx}>
            <Link to={`${props.match.url}/${order.id}`}>{order.attributes.order_type}</Link>
        <br></br>
        <br></br>
        </div>
    )
    
    return (
        <div>
            { ordersMap }
        </div>
    )
}

export default OrderIndex