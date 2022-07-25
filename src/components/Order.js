
const Order = (props) => {
    console.log(props)
    const skusMap = props.order.relationships.lots.data.map((lot, idx) =>
        <div key={idx}>
            {props.skus.find(skuFind => skuFind.id.toString() === lot.id)}
        </div>
    )

    return(
        <div>
                <br></br>
                <br></br>
            <h2>Order Type</h2>
                {/* <p>{props.order.relationships.order_type}</p> */}
                <br></br>
                <br></br>
            <h2>Order Skus</h2>
                <div>{skusMap}</div>
                <br></br>
                <br></br>
            <h2>description</h2>
                {/* <p>{props.order.relationships.order_type}</p> */}
                <br></br>
                <br></br>
        </div>
    )
}

export default Order