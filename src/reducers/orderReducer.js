function orderReducer(
    state = {
        orders: [],
        requesting: false,
        redirectAfterCreate: false,
        createdOrder: 0,
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
        
        case 'START_CREATING_ORDER':
            return {
                ...state,
                orders: [...state.orders],
                requesting: true,
            }


        case 'CREATE_ORDER':
            return {
                ...state,
                orders: [...state.orders, action.order.data],
                requesting: false,
                redirectAfterCreate: true,
                createdOrder: action.order.data.id
            }

        case 'REDIRECT_AFTER_CREATE':
            return {
                ...state,
                orders: [...state.orders],
                redirectAfterCreate: false
            }

        default:
            return state;
    }
}

export default orderReducer