
const CreateOrder  = (props) => {

    //console.log(props)

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
        <div key={idx}> 
            {sku.attributes.name}
            <div>
            <input
                type="text"
                name={sku.id}
                placeholder="Enter Order quantity"
                value={props.order.items.name}
                onChange={props.handleChange}
            />
            </div>
            <br></br>
            <br></br>
        </div>
    )   

    const skusMapLotsNested = props.skus.map((sku, idx) => 
        <div key={idx} value={sku.attributes.name}>
            <h3>{sku.attributes.name}</h3>
            {sku.relationships.lots.data.map((lot, idx) => 
                <div key={idx}>
                    Lot Number: {props.lots.find(lotFind => lotFind.id === lot.id).attributes.lot_number}
                    <br></br>
                    Quantity Available: {props.lots.find(lotFind => lotFind.id === lot.id).attributes.quantity}
                    <div>
                    <br></br>
                    <input
                        type="text"
                        name={lot.id}
                        placeholder="Enter Order quantity"
                        value={props.order.items.name}
                        onChange={props.handleChange}
                    />
                    </div>
                    <br></br>
                    <br></br>
                </div>
            )}
            <br></br>
            <br></br>
            <br></br>
        </div>
    )


    const orderTypeMap = props.order_types.map((order_type, idx) =>
        <option key={idx} value={order_type}>
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