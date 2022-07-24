import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

const dummyReducer = () => {
    return 100
}

const store = configureStore({reducer:rootReducer})

export default store; 