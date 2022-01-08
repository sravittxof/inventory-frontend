import React from "react";
import {Switch,
    Route,
} from "react-router-dom";
import { connect } from "react-redux";
import OrderMenu from "../components/OrderMenu";
import OrderIndex from "../components/OrderIndex"
import Order from "../components/Order"
import CreateOrder from "../components/CreateOrder"
import { createOrder, fetchOrders, redirectAfterCreate } from "../actions/orderActions";
import {fetchSkus} from "../actions/skuActions"
import {fetchLots} from "../actions/lotActions"

class OrderContainer extends React.Component{

    constructor(props){
        super(props)
        this.state = { currentOrder: {
            order_type: "",
            order_status: "",
            items: [],
            }
        }
    }  
    
    handleOnChange = (event) => {
        if(event.target.name === "order_type"){
            this.setState({
                currentOrder:{
                ...this.state.currentOrder, [event.target.name]: event.target.value, items: []
                }
            })
        } else {
            this.setState(prevState => ({
                currentOrder: {
                    ...prevState.currentOrder,
                    items: [ ...prevState.currentOrder.items.filter(item => item.item_id !== event.target.name), {item_id: event.target.name, quantity: event.target.value} ]
                }
            }))
        }   
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createOrder(this.state.currentOrder, this.props)
        this.setState({
            ...this.state, currentOrder: {
                order_type: "",
                status: "",
                items: [],             
            }   
        })
    }
    
    componentDidMount(){
        this.props.fetchOrders()
        this.props.fetchSkus()
        this.props.fetchLots()
    }

    componentDidUpdate(prevProps){
        if (this.props.store.orders.redirectAfterCreate && (prevProps.store.orders.redirectAfterCreate === false)){
            this.handleRedirect()
        }
    }

    handleRedirect = () => {
        this.props.redirectAfterCreate()
        this.props.history.push(`/orders/${this.props.store.orders.createdOrder}`)
    }


    render(){
        console.log(this.props)
        
        const order_types = ["", "Receive", "Ship"]
        //if (this.props.store.skus.redirectToShow){
        //    this.props.history.push(`/orders/${pendingDataFromFetch.data.id}`)
        //}

        return(
            <div>
                <div>
                    <OrderMenu url={this.props.match.url}/>
                </div>

                <Switch>
            
                    <Route 
                        exact
                        path={`${this.props.match.path}/`}
                        render={routerProps => <OrderIndex {...routerProps} 
                        orders={this.props.orders}
                        /> }
                    />

                    <Route
                        path={`${this.props.match.path}/create`}
                        render={routerProps => <CreateOrder 
                            {...routerProps}
                            order={this.state.currentOrder}
                            skus={this.props.skus}
                            lots={this.props.lots}
                            order_types={order_types}
                            handleChange={this.handleOnChange}
                            handleSubmit={this.handleSubmit}
                        />}
                    />

                    <Route
                        exact
                        path={`${this.props.match.path}/:id`}
                        render={routerProps => <Order {...routerProps}
                        order={this.props.orders.find(({id}) => id.toString() === routerProps.match.params.id)}
                            />}
                    />
                </Switch>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
     return {
        orders: state.orders.orders,
        skus: state.skus.skus,
        lots: state.lots.lots,
        store: state,
    }
    return {store: state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: () => dispatch(fetchOrders()),
        createOrder: (order, props) => dispatch(createOrder(order, props)),
        fetchSkus: () => dispatch(fetchSkus()),
        fetchLots: () => dispatch(fetchLots()),
        redirectAfterCreate: () => dispatch(redirectAfterCreate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer)