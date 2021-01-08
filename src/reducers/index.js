import { combineReducers } from 'redux'

import serviceReducer from './serviceReducer'
import providerReducer from './providerReducer.js'

const rootReducer = combineReducers({
    services: serviceReducer,
    providers: providerReducer
})

export default rootReducer