
const initialState = {
    isAuth: 0,
    token: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TOKEN_ISAUTH":
            return {isAuth: action.payloads.isAuth, token: action.payloads.token};
        case "LOGOUT":
            return {...state, isAuth: false, token: null};
        default:
            return state;
    }
}

export default authReducer