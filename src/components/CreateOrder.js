
const CreateOrder  = (props) => {

    const renderSkusOrLots = () => {
        if (props.order_type === "Ship"){
            return skusMapLotsNested()
        } else if (props.order_type === "Receive"){
            return skusMap()
        }
    }

    const skusMap = props.skus.map((sku, idx) => 
        <div> 
            {sku.attributes.name}
            <input type="checkbox" value={sku.attributes.name} >
            </input>
        </div>
    )   

    const skusMapLotsNested = props.skus.map((sku, idx) => 
        <div key={idx} value={sku.attributes.name}>
            {sku.attributes.name}
            {sku.relationships.lots.data.map((lot, idx) => 
                <input key={idx} value={lot.id}>
                    {lot.id}
                </input>
            )}
        </div>
    )

/*     const lotsMap = props.lots.map((lot,idx) =>
        <input value={lot.id}>
            {lot.id}
        </input>
    ) */

    const orderTypeMap = props.orderTypes.map((orderType, idx) =>
        <option value={orderType}>
            {orderType}
        </option>
    )

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>
                    OrderType
                <br></br>
                    <select name="order_type" value={props.order.order_type} onChange={props.handleChange}>
                    { orderTypeMap }
                    </select>
                </label>
            <br></br>
            <br></br>
                <label>Select Sku</label>
                <div>
                {renderSkusOrLots()}
                </div>
            <br></br>
            <br></br>
                <label>Order Quantity</label>
                <input
                    type="text"
                    name="quantity"
                    placeholder="Enter Order quantity"
                    value={props.order.quantity}
                    onChange={props.handleChange}
                />
            <br></br>
            <br></br>
                {skusMap}
            <br></br>
            <br></br>
                <input type="submit"/>
            </form>
        </div>
    )
}


export default CreateOrder