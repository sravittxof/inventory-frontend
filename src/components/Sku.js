
const Sku = (props) => {

    return(
        <div>
            <h3>SKU</h3>
                <br></br>
                <br></br>
            <h2>Name</h2>
                <p>{props.sku.name}</p>
                <br></br>
                <br></br>
            <h2>SKU Code</h2>
                <p>{props.sku.sku_code}</p>
                <br></br>
                <br></br>
            <h2>description</h2>
                <p>{props.sku.description}</p>
                <br></br>
                <br></br>
        </div>
    )
}

export default Sku