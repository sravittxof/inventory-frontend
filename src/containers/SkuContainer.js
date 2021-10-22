import React from "react";
import {Switch,
    Route,
} from "react-router-dom";
import { connect } from "react-redux";
import Sku from '../components/Sku.js'
import {fetchSkus} from '../actions/skuActions'
import {createSku} from '../actions/skuActions'
import {redirectAfterCreate} from "../actions/skuActions"
import CreateSku from '../components/CreateSku.js'
import SkuMenu from "../components/SkuMenu.js";
import SkuIndex from "../components/SkuIndex.js";



class SkuContainer extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            currentSku: {
                name: "",
                sku_code: "",
                description: "",
            },
            likes: []
        }
    }

    handleShowSku = () => {
        this.props.history.push(`/skus/${this.props.id}`)
    }

    handleOnChange = (event) => {
        this.setState({
            currentSku: {...this.state.currentSku, [event.target.name]: event.target.value}
        })
    }

    // handleLike = (event) => {
    //     if(this.state.likes.includes(event.target.name)){
    //         this.setState({
    //             currentSku: {...this.state.currentSku}, 
    //             likes: [...this.state.likes.filter(id => id !== event.target.name)],
    //         })
    //     } else {
    //         this.setState({
    //             currentSku: {...this.state.currentSku},
    //             likes: [...this.state.likes, event.target.name]
    //         })
    //     }
    // }

    handleLike = (event) => {
        this.setState({
            currentSku: {...this.state.currentSku},
            likes: this.state.likes.includes(event.target.name) ? [...this.state.likes.filter(id => id!== event.target.name)]: [...this.state.likes, event.target.name],
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createSku(this.state.currentSku, this.props)
        this.setState({
            ...this.state,
            currentSku: {
                name: "", sku_code: "", description: ""
            }
        })
    }


    componentDidMount(){
        this.props.fetchSkus()
    }

    componentDidUpdate(prevProps){
        if (prevProps.store.skus.redirectAfterCreate && (this.props.store.skus.redirectAfterCreate === false)){
            this.handleRedirect()
        }
    }

    handleRedirect = () => {
        this.props.redirectAfterCreate()
        this.props.history.push(`/skus/${this.props.store.skus.createdSku}`)
    }

 
    render() {
        console.log("Sku Container Rendering, these are its props")
        console.log(this.props)

        return (
        <div>
            <div>
                <SkuMenu url={this.props.match.url} />
            </div>

            <Switch>

            <Route
                exact
                path={`${this.props.match.path}/`}
                render={routerProps => <SkuIndex {...routerProps}
                skus={this.props.skus}
                handleLike={this.handleLike}
                likes={this.state.likes}
                />}
            />

            <Route
                path={`${this.props.match.path}/create`}
                render={routerProps => <CreateSku 
                    {...routerProps}
                    sku={this.state.currentSku}
                    handleChange={this.handleOnChange}
                    handleSubmit={this.handleSubmit} 
                    />}
            />

            <Route
                exact
                path={`${this.props.match.path}/:id`}
                render={routerProps => <Sku {...routerProps}
                    sku={this.props.skus.find(({id}) => id.toString() === routerProps.match.params.id)}
                    />}
            />
            </Switch>
        </div>
    )}  
}

const mapStateToProps = (state) => {
    return {
        store: state,
        skus: state.skus.skus,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createSku: (sku, skuActionProps) => dispatch(createSku(sku, skuActionProps)),
        fetchSkus: () => dispatch(fetchSkus()),
        redirectAfterCreate: () => dispatch(redirectAfterCreate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkuContainer)



// /////
// reduxComonent(action)

// state = []

// reducera(action){
//     if else
//     // modify state       
// }

// dispatch()

// ////

