import {MODAL_FETCH, MODAL_SUCCESS, MODAL_FAILURE} from '../actions/modalAction'

const initialState = {
    sentInfo:[],
    isfetching:false,
    error:""
}

const modalReducer = (state = initialState, action) => {
    switch (action.type){
        case MODAL_FETCH:
            return{
                ...state,
                isfetching: true,
                error:""
            }
        case MODAL_SUCCESS:
            return{
                ...state,
                sentInfo:action.payload,
                isfetching:false,
                error:""
            }
        case MODAL_FAILURE:
            return{
                ...state,
                error:action.payload
            }
        default:
            return state;
    }   
}
export default modalReducer