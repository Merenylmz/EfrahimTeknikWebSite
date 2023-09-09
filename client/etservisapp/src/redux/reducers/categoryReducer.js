
const initialState = {
    categories: []
}
const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORIES":
            return {...state, categories: action.payloads};
        case "GET_CATEGORY_BYID":
            return {...state, categories: action.payloads};
        case "ADD_CATEGORY":
            return {...state, categories:[...state.categories, action.payloads]};
        case "DELETE_PRODUCT":
            return {...state, categories: state.categories.filter(category => category._id == action.payloads)};
        case "EDIT_CATEGORY":
            const editedCategory = state.categories.map(category => category._id == action.payloads.id ? action.payloads : category);
            return {...state.categories, categories: editedCategory };
        default:
            return state;
    }
}

export default categoryReducer