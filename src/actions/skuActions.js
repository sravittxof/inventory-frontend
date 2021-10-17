
export const fetchSkus = () => {
    const configObject = {
        method: 'GET',
        headers: {
            //"Authorization": `Bearer ${localStorage.jwt}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    }

    return (dispatch) => {
        dispatch({type: 'START_FETCHING_SKUS'});
        fetch("http://localhost:3000/skus", configObject)
        .then(r => r.json())
        .then(data => dispatch({type: 'FETCH_SKUS', skus: data.data}))
        //.then(data => console.log(data))
        .catch(anyErrors => console.log(anyErrors))
    }
}

export const createSku = (sku, props) => {
    const configObject = {
        method: 'POST',
        headers: {
            //"Authorization": `Bearer ${localStorage.jwt}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            sku: sku
        })
    }

    let pendingDataFromFetch

    return (dispatch) => {
        dispatch({type: 'START_CREATING_SKU'});
        fetch("http://localhost:3000/skus", configObject)
        .then(response => response.json())
        .then(data => 
            pendingDataFromFetch = data )
        .then(somePromise =>
            dispatch({type: 'CREATE_SKU', sku: pendingDataFromFetch.data}) )
        .then(somePromise =>
            props.history.push(`/skus/${pendingDataFromFetch.data.id}`) )
    }
}

// export const redirectAfterCreate = () => {
//     return {type: 'REDIRECT_AFTER_CREATE', redirectAfterCreate: false}
// }