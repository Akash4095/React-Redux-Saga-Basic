import { ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART, ADD_PRODUCTS, SAVE_PRODUCTS,PRODUCT_SEARCH } from "./types"

export const addToCart = (props) => {
    console.warn("action called", props)
    return {
        type:ADD_TO_CART,
        data:props
    }
}

export const removeFromCart = (props) => {
    console.warn("action called", props)
    return {
        type:REMOVE_TO_CART,
        data:props
    }
}

export const emptyCart = (props) => {
    console.warn("action called", props)
    return {
        type:EMPTY_CART,
        data:props
    }
}

export const addProducts =(props)=>{
    console.log(props)
    return {
        type:ADD_PRODUCTS,
        data:props
    }
}

export const productSearch =(props)=>{
    console.log(props)
    return {
        type:PRODUCT_SEARCH,
        data:props
    }
}
