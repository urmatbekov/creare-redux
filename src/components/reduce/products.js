import service from "../service";

const initialState = {
    data: {
        count: 0,
        results: []
    },
    loading: true
}
const ADD_PRODUCTS = "ADD_PRODUCTS"
const REQUEST_PRODUCT = "REQUEST_PRODUCT"
const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_PRODUCT: {
            return {...state, loading: true}
        }
        case ADD_PRODUCTS: {
            return {data: action.payload, loading: false}
        }
        default: {
            return state
        }
    }
}


const addProducts = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product
    }
}
const requestProduct = () => {
    return {
        type: REQUEST_PRODUCT
    }
}

export const getProduct = () => (dispatch) => {
    dispatch(requestProduct)
    service.getProduct().then((data)=>{
        dispatch(addProducts(data))
    })
}

export default ProductsReducer;