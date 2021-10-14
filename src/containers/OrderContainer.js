import React from "react";
import {Switch,
    Route,
} from "react-router-dom";
import { connect } from "react-redux";
// import OrderMenu from "../components/OrderMenu";
import OrderIndex from "../components/OrderIndex"
import CreateOrder from "../components/CreateOrder"
import { createOrder, fetchOrders } from "../actions/orderActions";

class OrderContainer extends React.Component{

    state = { currentOrder: {
        order_type: "",
        order_status: "",
        items: "",
        }
    }
    
    handleOnChange = (event) => {
        this.setState({
            currentOrder: {
            ...this.state.currentOrder, [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createOrder(this.state.currentOrder)
        //this.props.history.push(`/skus/${this.state.currentSku.name}`)
        this.setState({
            ...this.state, currentOrder: {
                orderType: "",
                status: "",
                items: [],             
            }   
        })
    }
    
    componentDidMount(){
        this.props.fetchOrders()
    }

    render(){

        const orderTypes = ["", "Receive", "Ship"]
        console.log(this.props.store)
        return(
            <div>
                <div>
                    {/* <OrderMenu url={this.props.match.url}/> */}
                </div>

                <Switch>
            
                    <Route 
                        exact
                        path={`${this.props.match.path}/`}
                        render={routerProps => <OrderIndex {...routerProps} 
                        orders={this.props.store.orders.orders}
                        /> }
                    />

                    <Route
                        path={`${this.props.match.path}/create`}
                        render={routerProps => <CreateOrder 
                            {...routerProps}
                            order={this.state.currentOrder}
                            skus={this.props.store.skus.skus}
                            orderTypes={orderTypes}
                            handleChange={this.handleOnChange}
                            handleSubmit={this.handleSubmit}
                            redirectToShow={this.handleShoworder}
                        />}
                    />
                </Switch>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
/*     return {
        orders: state.orders,
        skus: state.skus,
        store: state
    } */
    return {store: state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: () => dispatch(fetchOrders()),
        createOrder: (order) => dispatch(createOrder(order))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer)