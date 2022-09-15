import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducers'
import iceCreamReducer from './iceCream/iceCreamReducer'

const rootReducers=combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducers
