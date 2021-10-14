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

    state = {
        orderType: "",
        status: "",
        items: "",
    }
    
    handleOnChange = (event) => {
        this.setState({
            ...this.state, [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createOrder(this.state.currentOrder)
        //this.props.history.push(`/skus/${this.state.currentSku.name}`)
        this.setState({
            ...this.state,
                orderType: "",
                status: "",
                items: [],                
        })
    }
    
    componentDidMount(){
        this.props.fetchOrders()
    }

    render(){

        const orderTypes = ["", "Receive", "Ship"]
        
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
                        orders={this.store.orders}
                        /> }
                    />

                    <Route
                        path={`${this.props.match.path}/create`}
                        render={routerProps => <CreateOrder 
                            {...routerProps}
                            order={this.state}
                            skus={this.store.skus}
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
    return {
        orders: state.orders,
        skus: state.skus,
        store: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: () => dispatch(fetchOrders()),
        createOrder: (order) => dispatch(createOrder(order))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer)