import React from "react";
import {Switch,
    Route,
} from "react-router-dom";
import { connect } from "react-redux";
import Sku from '../components/Sku.js'
import {fetchSkus} from '../actions/skuActions'
import {createSku} from '../actions/skuActions'
import CreateSku from '../components/CreateSku.js'
//import SkuMenu from "../components/SkuMenu.js";
import SkuIndex from "../components/SkuIndex.js";



class SkuContainer extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            skus: [],
            currentSku: {
                name: ""
            }
        }
    }

    handleShowSku = (sku) => {
        this.props.history.push(`/skus/${sku.id}`)
    }

    handleOnChange = (event) => {
        this.setState({
            ...this.state, currentSku: {[event.target.name]: event.target.value}
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createSku(this.state.currentSku)
        //this.props.history.push(`/skus/${this.state.currentSku.name}`)
        this.setState({
            ...this.state,
            currentSku: {name: ""}
        })
    }


    componentDidMount(){
        this.props.fetchSkus()
    }

 
    render() {
        console.log(this.props.store)
        return (
        <div>
            <div>
                {/* <SkuMenu url={this.props.match.url} /> */}
            </div>

            <Switch>

            <Route
                exact
                path={`${this.props.match.path}/`}
                render={routerProps => <SkuIndex {...routerProps}
                skus={this.props.store.skus.skus}
                //showSku={this.handleShowSku}
                />}
            />

            <Route
                path={`${this.props.match.path}/create`}
                render={routerProps => <CreateSku 
                    {...routerProps}
                    sku={this.state.currentSku}
                    handleChange={this.handleOnChange}
                    handleSubmit={this.handleSubmit}
                    redirectToShow={this.handleShowSku}
                    />}
            />

            <Route
                exact
                path={`${this.props.match.path}/:id`}
                render={routerProps => <Sku {...routerProps}
                    sku={this.props.store.skus.skus.find(({id}) => id.toString() === routerProps.match.params.id)}
                    />}
            />
            </Switch>
        </div>
    )}  
}

const mapStateToProps = (state) => {
    return {
        store: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //addSku: (sku) => dispatch(addSku(sku)),
        createSku: (sku) => dispatch(createSku(sku)),
        fetchSkus: () => dispatch(fetchSkus())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkuContainer)