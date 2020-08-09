import { combineReducers } from 'redux'
import { skatersReducer } from '../reducers/skatersReducer'

const rootReducer = combineReducers({
	skaters: skatersReducer
})

export default rootReducer