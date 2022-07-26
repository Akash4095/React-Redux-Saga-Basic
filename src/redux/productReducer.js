

const productData = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        // case "ADD_PRODUCT":
        //     console.log("add to product called", action)
        //     return [...state, action.data]

        // ADD_PRODUCTS iscalled in sagas 

        case "SAVE_PRODUCTS":
            console.log("products saved in reducer", action.data)
            return [...action.data]

        default:

            return state
    }

}


export default productData