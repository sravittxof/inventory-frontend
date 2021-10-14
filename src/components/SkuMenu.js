import { Link } from "react-router-dom";


const SkuMenu = (props) => {
    return (
        <div>
            <h1>Sku Menu</h1>
            <ul>
                <li>
                    <Link to={`${props.url}/create`} >
                        Create SKU
                    </Link>
                </li>
                <li>
                    <Link to={`${props.url}`} >
                        Skus Index
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default SkuMenu