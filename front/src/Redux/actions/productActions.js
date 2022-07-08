import axios from "axios"
import { ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "../constants/productTypes"

export const getAllProducts = ()=> async dispatch=>{
    dispatch({type:GET_PRODUCTS_LOADING})
    try {
        const response=await axios.get('http://localhost:5000/products/')
        dispatch({type: GET_PRODUCTS_SUCCESS, payload:response.data})
    } catch (error) {
        console.log(error)
        dispatch({type: GET_PRODUCTS_FAIL, payload: error})
    }

}

export const deleteProduct = (id)=> async dispatch=>{
    try {
         const response=await axios.delete(`http://localhost:5000/products/${id}`)
         dispatch({type:DELETE_PRODUCT_SUCCESS})
         dispatch(getAllProducts())
        } catch (error) {
            console.log(error);
            dispatch({type:DELETE_PRODUCT_FAIL , payload:error})
         }

}

export const addProduct = (newProduct, navigate)=> async dispatch=>{
    try {
         const response=await axios.post("http://localhost:5000/products/addproduct", newProduct)
         console.log(response)
         dispatch({type:ADD_PRODUCT_SUCCESS})
         dispatch(getAllProducts())
         navigate("/")
        } catch (error) {
            console.log(error);
            dispatch({type:ADD_PRODUCT_FAIL , payload:error})
            alert(error.response.data)
         }

}