import axios from "axios"

export const getCategories = () => async(dispatch)=>{
    try {
        const response = await axios.get("http://localhost:3001/categories");
        const categories = await response.data;
        dispatch({
            type: "GET_CATEGORIES",
            payloads: categories
        });
    } catch (error) {
        console.log(error);
    }
}

export const getCategoryById = (id) => async(dispatch) =>{
    try {
        const response = await axios.get("http://localhost:3001/categories/"+id);
        const category = await response.data;

        dispatch({
            type: "GET_CATEGORY_BYID",
            payloads: category
        });
    } catch (error) {
        console.log(error);
    }
}

export const addCategory = (data, token) => async(dispatch)=>{
    try {
        const response = await axios.post("http://localhost:3001/categories", data, {
            headers: {
                'x-auth-token': `${token}`
            }
        });

        const newCategory = await response.data;

        dispatch({
            type: "ADD_CATEGORY",
            payloads: newCategory
        });
    } catch (error) {
        console.log(error);
    }
}

export const deleteCategory = (id, token) => async(dispatch) =>{
    try {
        await axios.delete("http://localhost:3001/categories/"+id, {
            headers: {
                'x-auth-token': `${token}`
            }
        });

        dispatch({
            type: "DELETE_CATEGORY",
            payloads: id
        });
        
    } catch (error) {
        console.log(error);
    }
}

export const editCategory = (id, data, token) => async(dispatch) =>{
    try {
        const response = await axios.put("http://localhost:3001/categories/"+id, data, {
            headers: {
                'x-auth-token': `${token}`
            }
        });
        const editedCategory = await response.data;

        dispatch({
            type: "EDIT_CATEGORY",
            payloads: editedCategory
        });
    } catch (error) {
        console.log(error);
    }
}