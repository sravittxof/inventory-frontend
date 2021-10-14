function userReducer(
    state = {
        users: [],
        requesting: false
    }, action
){
    switch (action.type) {
        case 'START_SIGNING_IN':
            return {
                ...state,
                users: [...state.users],
                requesting: true,
            }

        case 'SIGN_IN':
            return {
                ...state,
                users: [...state.users, action.user],
                requeting: false
            }

        case 'START_FETCHING_USERS':
            return {
                ...state,
                users: [...state.users],
                requesting: true,
            }

        case 'FETCH_USERS':
            return {
                ...state,
                users: action.users,
                requesting: false,
            }
        
        case 'START_CREATING_USER':
            return {
                ...state,
                users: [...state.users],
                requesting: true,
            }


        case 'CREATE_USER':
            return {
                ...state,
                users: [...state.users, action.user],
                requesting: false,
            }

        default:
            return state;
    }
}

export default userReducer