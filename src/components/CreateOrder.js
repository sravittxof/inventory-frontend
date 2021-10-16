
const CreateOrder  = (props) => {

    const renderSkusOrLots = () => {
        if (props.order.order_type === "Ship"){
            return(
                skusMapLotsNested
            )
        } else if (props.order.order_type === "Receive"){
            return skusMap
        }
    }

    const skusMap = props.skus.map((sku, idx) => 
        <div> 
            {sku.attributes.name}
            <input type="checkbox" name="sku_id" value={sku.id} >
            </input>
            <div>
            <label>Order Quantity</label>
            <input
                type="text"
                name="quantity"
                placeholder="Enter Order quantity"
                value={props.order.quantity}
                onChange={props.handleChange}
            />
            </div>
            <br></br>
            <br></br>
        </div>
    )   

    const skusMapLotsNested = props.skus.map((sku, idx) => 
        <div key={idx} value={sku.attributes.name}>
            {sku.attributes.name}
            {sku.relationships.lots.data.map((lot, idx) => 
                <div key={idx}>
                    {lot.id}
                <input key={idx} value={lot.id} name="lot_id" type="checkbox">
                </input>
                    <div>
                    <label>Order Quantity</label>
                    <input
                        type="text"
                        name="quantity"
                        placeholder="Enter Order quantity"
                        value={props.order.quantity}
                        onChange={props.handleChange}
                    />
                    </div>
                </div>
            )}
        </div>
    )


    const orderTypeMap = props.order_types.map((order_type, idx) =>
        <option value={order_type}>
            {order_type}
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
                <div>
                {renderSkusOrLots()}
                </div>
            <br></br>
            <br></br>
                <input type="submit"/>
            </form>
        </div>
    )
}


export default CreateOrder