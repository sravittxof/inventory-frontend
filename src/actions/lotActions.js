
export const fetchLots = () => {
    const configObject = {
        method: 'GET',
        headers: {
            //"Authorization": `Bearer ${localStorage.jwt}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    }

    return (dispatch) => {
        dispatch({type: 'START_FETCHING_LOTS'});
        fetch("http://localhost:3000/lots", configObject)
        .then(r => r.json())
        //.then(data => console.log(data))
        .then(data => dispatch({type: 'FETCH_LOTS', lots: data.data}))
        .catch(anyErrors => console.log(anyErrors))
    }
}