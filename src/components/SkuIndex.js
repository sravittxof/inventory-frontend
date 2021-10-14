import { Link } from "react-router-dom";

const SkuIndex = (props) => {

    const skusMap = props.skus.map((sku, idx) => 
        <div key={idx}>
            <Link to={`${props.match.url}/${sku.id}`}>{sku.name}</Link>
            <p>{sku.sku_code}</p>
            <p>{sku.description}</p>
            <br></br>
            <br></br>
        </div>
        )
    return (skusMap)
}

export default SkuIndex