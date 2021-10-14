function skuReducer(
    state = {
        skus: [],
        requesting: false,
    },
    action
){
    switch (action.type) {
        case 'START_FETCHING_SKUS':
            return {
                ...state,
                skus: [...state.skus],
                requesting: true,
            }

        case 'FETCH_SKUS':
            return {
                ...state,
                skus: action.skus,
                requesting: false,
            }
        
        case 'START_CREATING_SKU':
            return {
                ...state,
                skus: [...state.skus],
                requesting: true,
            }


        case 'CREATE_SKU':
            return {
                ...state,
                skus: [...state.skus, action.sku],
                requesting: false,
            }

        default:
            return state;
    }
}

export default skuReducer