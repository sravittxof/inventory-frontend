import { Link } from "react-router-dom";

const SkuIndex = (props) => {
    const skusMap = props.skus.map((sku, idx) => 
        <div key={idx}>
            <Link to={`${props.match.url}/${sku.id}`}>{sku.attributes.name}</Link>
{/*             <p>{sku.attributes.sku_code}</p>
            <p>{sku.attributes.description}</p> */}
            <br></br>
            <br></br>
        </div>
        )
    return (skusMap)
}

export default SkuIndex