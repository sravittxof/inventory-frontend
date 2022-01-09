import { Link } from "react-router-dom";

const SkuIndex = (props) => {
        //console.log(props)
    const skusMap = props.skus.map((sku, idx) => 
        <div key={idx}>
            <Link to={`${props.match.url}/${sku.id}`}>{sku.name}</Link>
            <p>{sku.skuCode}</p>
            <p>{sku.description}</p>
            <br></br>
            <br></br>
        </div>
        )
    return (skusMap)
        //return (<div>"HELLO"</div>)
}

export default SkuIndex