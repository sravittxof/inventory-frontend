function orderReducer(
    state = {
        orders: [],
        requesting: false,
        //redirectToShow: false,
    },
    action
){
    switch (action.type) {
        case 'START_FETCHING_ORDERS':
            return {
                ...state,
                orders: [...state.orders],
                requesting: true,
            }

        case 'FETCH_ORDERS':
            return {
                ...state,
                orders: action.orders.data,
                requesting: false,
            }
        
        case 'START_CREATING_ORDERS':
            return {
                ...state,
                orders: [...state.orders],
                requesting: true,
            }


        case 'CREATE_ORDER':
            return {
                ...state,
                orders: [...state.orders, action.order],
                requesting: false,
                //redirectToShow: true
            }

        default:
            return state;
    }
}

export default orderReducer