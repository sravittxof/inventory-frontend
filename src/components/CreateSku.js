
const CreateSku  = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter new Sku"
                    value={props.name}
                    onChange={props.handleChange}
                />
                <br></br>
                <br></br>
                <input
                    type="text"
                    name="skuCode"
                    placeholder="Enter New Sku Code"
                    value={props.skuCode}
                    onChange={props.handleChange}
                />
                <br></br>
                <br></br>
                <input
                    type="text"
                    name="description"
                    placeholder="Enter Sku Description"
                    value={props.description}
                    onChange={props.handleChange}
                />
                <br></br>
                <br></br>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default CreateSku



/*



*/