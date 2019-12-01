import {combineReducers} from 'redux'

import techReducer from './techReducer'
import projectReducer from './projectReducer'
import addProjectReducer from './addProjectReducer'
import iconCard from './iconCardReducer'

export default combineReducers ({
    techReducer,
    projectReducer,
    addProjectReducer,
    iconCard
})