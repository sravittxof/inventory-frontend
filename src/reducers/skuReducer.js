function skuReducer(
    state = {
        skus: [],
        requesting: false,
        redirectAfterCreate: false,
        createdSku: 0,
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
                redirectAfterCreate: true,
                createdSku: action.sku.id
            }

        case 'REDIRECT_AFTER_CREATE':
            return {
                ...state,
                skus: [...state.skus],
                redirectAfterCreate: false
            }

        default:
            return state;
    }
}

export default skuReducer