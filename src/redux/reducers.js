// Reducer handle data for store

// update data  in store

//Rules
// need root reducer 
// reducer must return the some value
// the reducer must have some initaial value

const cartData = (initaialValues = [], action) => {

    if (action.type === "ADD_TO_CART") {
        console.log("reducer called", action)
        return action.data
    } else {
        return "no action called"
    }


}

export default cartData
