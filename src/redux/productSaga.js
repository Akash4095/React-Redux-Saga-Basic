/// make saga file and write saga basic function
//register saga middleware with store

// generator function returs result after async operation completed
// yield used with generator functions

import { takeEvery, put } from 'redux-saga/effects'
import { saveProducts } from './actions'

function* productSaga() {
    yield takeEvery("ADD_PRODUCTS", getProducts)
}

function* getProducts() {
    let data = yield fetch("http://localhost:3500/product")
    data = yield data.json()

    yield put({type:"SAVE_PRODUCTS", data})

    console.log("call api", data)
}

export default productSaga