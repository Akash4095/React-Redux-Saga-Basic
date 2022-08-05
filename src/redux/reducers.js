// Reducer handle data for store

// update data  in store

//Rules
// need root reducer 
// reducer must return the some value
// the reducer must have some initaial value

const cartData = (state = [], action) => {

    // if (action.type === "ADD_TO_CART") {
    //     console.log("reducer called", action)
    //     return action.data
    // } else {
    //     return "no action called"
    // }

    switch (action.type) {
        case "ADD_TO_CART":
            console.log("add to cart called", action)
            return [...state, action.data]

        case "REMOVE_TO_CART":
            console.log("remove to cart called", action)
            console.log(action.data,'-------action')
            // state.length = state.length ? state.length - 1 : null
            const removed = state.filter((item)=> item.id !== action.data)
            // return [...state]
            return [...removed]
        case "EMPTY_CART":
            console.log("empty to cart called", action)
            return []
        default:

            return state
    }

}


export default cartData

