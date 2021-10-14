import { Link } from "react-router-dom";



const SkuMenu = (props) => {
    console.log(props)
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

<div>
TEST
<br></br>
<br></br>
<input type="checkbox" id="textCheckbox" value="?">
</input>
</div>
        </div>
    )
}

export default SkuMenu