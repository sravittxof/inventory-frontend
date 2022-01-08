export const fetchOrders = () => {
    const configObject = {
        method: 'GET',
        headers: {
            //"Authorization": `Bearer ${localStorage.jwt}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    }

    return (dispatch) => {
        dispatch({type: 'START_FETCHING_ORDERS'});
        fetch("http://localhost:3000/orders", configObject)
        .then(r => r.json())
        .then(data =>dispatch(
            {type: 'FETCH_ORDERS', orders: data})
        )
        .catch(anyErrors => console.log(anyErrors))
    }
}

export const createOrder = (order, props) => {
    const configObject = {
        method: 'POST',
        headers: {
            //"Authorization": `Bearer ${localStorage.jwt}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            order: order
        })
    }

    let pendingDataFromFetch

    return (dispatch) => {
        dispatch({type: 'START_CREATING_ORDER'});
        fetch("http://localhost:3000/orders", configObject)
        .then(response => response.json())
        .then(data =>
            //console.log(data)
            dispatch({type: 'CREATE_ORDER', order: data })
            )
    }
}

export const redirectAfterCreate = () => {
    return (dispatch) => {
        dispatch({type: 'REDIRECT_AFTER_CREATE'})
    }
}