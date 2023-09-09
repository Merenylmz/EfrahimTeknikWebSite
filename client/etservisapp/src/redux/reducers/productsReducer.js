
const initialState = {
    products: [],
    productByCategoryId: []
}
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {...state, products: action.payloads};
        case "GET_PRODUCT_BYID":
            return {...state, products: action.payloads};
        case "GET_PRODUCTS_BY_CATEGORY":
            return{...state, productByCategoryId: action.payloads};
        case "GET_LIMITED_PRODUCTS":
            return {...state, products: action.payloads};
        case "ADD_PRODUCT":
            return {...state, products: [...state.products, action.payloads]};
        case "DELETE_PRODUCT": 
            return {
                ...state,
                products: state.products.filter(product => product._id != action.payloads)
            };
        case "EDIT_PRODUCT":
            const editedProduct = state.products.map(p=>p._id == action.payloads.id ? action.payloads : p);
            return {...state.products, products: editedProduct };
        default:
            return state;
    }
}

export default productsReducer