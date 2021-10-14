import { NavLink } from "react-router-dom";

const NavBar = () => {
    const link = {
        width: "100px",
        // padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };

    return(
        <div>
            <NavLink
                to="/"
                style={link}
            >
                HOME
            </NavLink>

            <NavLink
                to="/skus"
                style={link}
            >
                SKUS
            </NavLink>

            <NavLink
                to="/orders"
                style={link}
            >
                ORDERS
            </NavLink>

        </div>

    )
}

export default NavBar