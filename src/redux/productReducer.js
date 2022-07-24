

const productData = (state = {}, action) => {
console.log(action)
    switch (action.type) {
        case "ADD_PRODUCT":
            console.log("add to product called", action)
            return [...state, action.data]

        case "REMOVE_TO_CART":
            console.log("remove products called", action)
            state.length = state.length ? state.length - 1 : null
            return [...state]
    
        default:

            return state
    }

}


export default productData