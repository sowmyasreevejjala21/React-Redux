
import { ActionTypes } from "../constants/action-types";
import fakeProductsApi from '../../containers/api/fakeProductsApi'

export const fetchProducts = () => async (dispatch) => {
    const response = await fakeProductsApi.get("/products");
    dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data})
}

export const fetchProduct = (id) => async (dispatch) => {
    const response = await fakeProductsApi.get(`/products/${id}`);
    dispatch({type: ActionTypes.SELECTED_PRODUCTS, payload: response.data})
}

// export const setProducts = (products) => {
//     return {
//         type: ActionTypes.SET_PRODUCTS,
//         payload: products
//     }
// }

// export const selectedProducts = (product) => {
//     return {
//         type: ActionTypes.SELECTED_PRODUCTS,
//         payload: product
//     }
// }

export const removeSelectedProducts = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    }
}