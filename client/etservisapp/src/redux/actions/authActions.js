import axios from "axios";

export const login = (email, password) => async(dispatch)=>{
    try {
        const response = await axios.post("http://localhost:3001/auth/login/", {
            email: email,
            password: password
        });
        const status = await response.data;
        
        dispatch({
            type: "GET_TOKEN_ISAUTH",
            payloads: {
                isAuth: status.isAuth,
                token: status.token
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export const logout = () => async(dispatch) => {
    dispatch({
        type: "LOGOUT"
    });
}