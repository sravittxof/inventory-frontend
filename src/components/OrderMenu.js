import { Link } from "react-router-dom";


const OrderMenu = (props) => {
    console.log(props)
    return (
        
        <div>
            <h1>Order Menu</h1>
            <ul>
                <li>
                    <Link to={`${props.url}/create`} >
                        Create Order
                    </Link>
                </li>
                <li>
                    <Link to={`${props.url}`} >
                        Orders Index
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default OrderMenu