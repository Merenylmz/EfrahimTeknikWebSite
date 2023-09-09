

const initialState = {
    messages:[]
}
const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MESSAGES":
            return {...state, messages: action.payloads};            
    
        case "ADD_MESSAGE":
            return {...state.messages, messages: action.payloads}
        case "DELETE_MESSAGE":
            return{
                ...state,
                messages: state.messages.filter(message=>message._id != action.payloads)
            }
        default:
            return state;
    }
}

export default messageReducer