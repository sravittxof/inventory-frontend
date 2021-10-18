
const Order = (props) => {
    console.log(props)
    return(
        <div>
                <br></br>
                <br></br>
            <h2>Order Type</h2>
                <p>{props.order.attributes.order_type}</p>
                <br></br>
                <br></br>
            <h2>Order Skus</h2>
                <p>{props.order.attributes.order_type}</p>
                <br></br>
                <br></br>
            <h2>description</h2>
                <p>{props.order.attributes.order_type}</p>
                <br></br>
                <br></br>
        </div>
    )
}

export default Order