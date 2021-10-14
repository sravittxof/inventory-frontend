
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({type: 'START_FETCHING_USERS'});
        fetch("http://localhost:3000/users")
        .then(r => r.json())
        .then(data => dispatch({type: 'FETCH_USERS', users: data}))
        .catch(anyErrors => console.log(anyErrors))
    }
}

export const signIn = user => {
    const configObject = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            user: {
                username: user.username,
                password: user.password
            }
        })
    }

    return (dispatch) => {
        dispatch({type: 'START_SIGNING_IN'});
        fetch("http://localhost:3000/api/v1/login", configObject)
        .then(response => response.json())
        .then((data) =>
        //dispatch({type: 'SIGN_IN', user: data})
        localStorage.setItem("jwt", data.jwt)
        )
    }
}

// export const signIn = user => {
//     const configObject = {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             user: {
//                 username: user.username,
//                 password: user.password
//             }
//         })
//     }

//     return (dispatch) => {
//         dispatch({type: 'START_SIGNING_IN'});
//         fetch("http://localhost:3000/api/v1/users", configObject)
//         .then(response => response.json())
//         .then((data) =>
//         //dispatch({type: 'SIGN_IN', user: data})
//         localStorage.setItem("jwt", data.jwt)
//         )
//     }
// }