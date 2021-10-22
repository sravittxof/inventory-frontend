
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
        //.then(data => 
        //    pendingDataFromFetch = data )
        .then(data =>
            dispatch({type: 'CREATE_SKU', sku: data.data}) )
        //.then(somePromise =>
         //   props.history.push(`/skus/${pendingDataFromFetch.data.id}`) )
    }
}

    export const redirectAfterCreate = () => {
        return (dispatch) => {
            dispatch({type: 'START_REDIRECTING_AFTER_CREATE'})
        }
    }

/*
- dispatch after fetch resolves updates store, set updating_store to true
- change to store should trigger re-render of the SkuContainer becuase it receives props in constructor
- during re-render, conditional evaluates if updating_store is set to true, if so, 
    - in conditional, try to redirect first and then call skuAction
- skuAction dispatches event, sets update_store to false

*/




















// export const redirectAfterCreate = () => {
//     return {type: 'REDIRECT_AFTER_CREATE', redirectAfterCreate: false}
// }