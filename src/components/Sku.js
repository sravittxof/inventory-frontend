
const Sku = (props) => {
    console.log(props)
    return(
        <div>
                <br></br>
                <br></br>
            <h2>Name</h2>
                <p>{props.sku.attributes.name}</p>
                <br></br>
                <br></br>
            <h2>SKU Code</h2>
                <p>{props.sku.attributes.sku_code}</p>
                <br></br>
                <br></br>
            <h2>description</h2>
                <p>{props.sku.attributes.description}</p>
                <br></br>
                <br></br>
        </div>
    )
}

export default Sku