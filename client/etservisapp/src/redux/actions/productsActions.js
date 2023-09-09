import axios from "axios"


export const getProducts = () => async(dispatch) => {
    try {
        const response = await axios.get("http://localhost:3001/products");
        const products = await response.data;
    
        dispatch({
            type: "GET_PRODUCTS",
            payloads: products
        });
        
    } catch (error) {
        console.log(error);
    }
}

export const getProductsById = (id) => async(dispatch)=>{
    try {
        const response = await axios.get("http://localhost:3001/products/"+id);
        const product = await response.data;

        dispatch({
            type: "GET_PRODUCT_BYID",
            payloads: product
        });
    } catch (error) {
        console.log(error);
    }
};

export const getProductByCategoryId = (catId) => async(dispatch)=>{
    try {
        const response = await axios.get("http://localhost:3001/products/cat/"+catId);
        const products = await response.data;

        dispatch({
            type: "GET_PRODUCTS_BY_CATEGORY",
            payloads: products
        });
    } catch (error) {
        console.log(error);
    }
}

export const getLimitedProduct = (number) => async(dispatch)=>{
    try {
        const response = await axios.get("http://localhost:3001/products/limit/"+number);
        const products = await response.data;

        dispatch({
            type: "GET_LIMITED_PRODUCTS",
            payloads: products
        });
    } catch (error) {
        console.log(error);
    }
}

export const addProduct = (data, token) => async(dispatch) =>{
    try {
        const response = await axios.post("http://localhost:3001/products", data, {
            headers: {
                'x-auth-token': `${token}`
            }
        });
        const newProduct = await response.data;
        
        dispatch({
            type: "ADD_PRODUCT",
            payloads: newProduct
        });
    } catch (error) {
        console.log(error);
    }
}


export const deleteProduct = (id, token) => async(dispatch)=> {
    try {
        const response = await axios.delete("http://localhost:3001/products/"+id,{
            headers: {
                'x-auth-token': `${token}`
            }
        });

        dispatch({
            type: "DELETE_PRODUCT",
            payloads: id
        });
    } catch (error) {
        console.log(error);
    }
}

export const editProduct = (id, data, token) => async(dispatch)=>{
    try {
        const response = await axios.put("http://localhost:3001/products/"+id, data,{
            headers: {
                'x-auth-token': `${token}`
            }
        });
        const editedProduct = await response.data;

        dispatch({
            type: "EDIT_PRODUCT",
            payloads: editedProduct
        });
    } catch (error) {
        console.log(error);
    }
}