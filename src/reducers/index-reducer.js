import {combineReducers} from 'redux'

import techReducer from './techReducer'
import projectReducer from './projectReducer'
import addProjectReducer from './addProjectReducer'

export default combineReducers ({
    techReducer,
    projectReducer,
    addProjectReducer
})