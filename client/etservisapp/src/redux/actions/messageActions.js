import axios from "axios";

export const getAllMessages = (token) => async(dispatch) =>{
    try {
        const response = await axios.get("http://localhost:3001/messages/", {
            headers: {
                'x-auth-token': token
            }
        });
        const messages = await response.data;

        dispatch({
            type: "GET_MESSAGES",
            payloads: messages
        });
    } catch (error) {
        console.log(error);
    }
}

export const addMessage = (data) => async(dispatch) => {
    try {
        const response = await axios.post("http://localhost:3001/messages/", data);
        const newMessage = await response.data;

        dispatch({
            type: "ADD_MESSAGE",
            payloads: newMessage
        });
    } catch (error) {
        console.log(error);
    }
}

export const deleteMessage = (id, token) => async(dispatch)=>{
    try {
        await axios.delete("http://localhost:3001/messages/"+id, {
            headers: {
                'x-auth-token': `${token}`
            }
        });

        dispatch({
            type: "DELETE_MESSAGE",
            payloads: id
        })
    } catch (error) {
        console.log(error);
    }
}