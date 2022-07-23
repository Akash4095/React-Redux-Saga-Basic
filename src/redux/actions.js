import { ADD_TO_CART } from "./types"

export const addToCart = (props) => {
    console.warn("action called", data)
    return {
        type:ADD_TO_CART,
        data:props
    }
}