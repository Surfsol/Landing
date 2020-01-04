import {combineReducers} from 'redux'

import techReducer from './techReducer'
import projectReducer from './projectReducer'
import addProjectReducer from './addProjectReducer'
import iconCardReducer from './iconCardReducer'
import modalReducer from './modalReducer'
import loginReducer from './loginReducer'

export default combineReducers ({
    techReducer,
    projectReducer,
    addProjectReducer,
    iconCardReducer,
    modalReducer,
    loginReducer
})