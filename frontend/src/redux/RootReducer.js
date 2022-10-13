import {combineReducers} from 'redux'
import utilsReducer from './utils/Reducer'

const rootReducer = combineReducers({
    utils : utilsReducer
})

export default rootReducer