import {combineReducers} from 'redux'

import techReducer from './techReducer'
import projectReducer from './projectReducer'

export default combineReducers ({
    techReducer,
    projectReducer
})