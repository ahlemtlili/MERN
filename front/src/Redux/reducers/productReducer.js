import { DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCESS, GET_ONE_PRODUCT_FAIL, GET_ONE_PRODUCT_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, UPDATE_ONE_PRODUCT_FAIL } from "../constants/productTypes";

const initialState={
loading: false,
products:[],
errors:null,
oneProduct:{}
}

export const productReducer =(state=initialState, {type, payload})=>{
    switch (type) {
        case GET_PRODUCTS_LOADING: return {...state, loading:true}
        case GET_PRODUCTS_SUCCESS: return {...state, products:payload, loading:false}        
        case GET_PRODUCTS_FAIL: return {...state, errors: payload, loading:false}
        // case DELETE_PRODUCT_SUCCESS: return {...state, products: state.products.filter()}
        case DELETE_PRODUCT_FAIL: return {...state, errors: payload}
        case GET_ONE_PRODUCT_SUCCESS:return{...state,oneProduct:payload}
        case GET_ONE_PRODUCT_FAIL: return {...state, errors: payload}
        case UPDATE_ONE_PRODUCT_FAIL: return {...state, errors: payload}


        default: return state;
           
    }
}