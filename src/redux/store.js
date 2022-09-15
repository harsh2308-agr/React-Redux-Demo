import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from './rootReducers'
//import cakeReducer from './cake/cakeReducers'

import logger from 'redux-logger'
const store=createStore(rootReducers, composeWithDevTools(applyMiddleware(logger)))
export default store