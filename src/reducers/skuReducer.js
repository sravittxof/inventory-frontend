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
                //redirectingAfterCreate: true
            }


/*         case 'START_REDIRECTING_AFTER_CREATE':
            return {
                ...state,
                skus: [...state.skus],
                //redirectingAfterCreate: true
            }

        case 'REDIRECT_AFTER_CREATE':
            return {
                ...state,
                skus: [...state.skus],
                //redirectingAfterCreate: action.redirectAfterCreate
            } */

        default:
            return state;
    }
}

export default skuReducer