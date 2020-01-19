import {COMMENTS_FETCH, COMMENTS_SUCCESS, COMMENTS_FAILURE} from '../actions/commentsAction'

const initialState = {
    comments:[],
    isfetching:false,
    error: ""
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type){
        case COMMENTS_FETCH:
            return{
                ...state,
                isfetching:true,
                error:""
            }
        case COMMENTS_SUCCESS:
            return{
                ...state,
                comments:action.payload,
                isfetching:false
            }
        case COMMENTS_FAILURE:
            return{
                ...state,
                error:action.payload,
                isfetching:false
            }
        default:
            return state;
            
    }
}
export default commentsReducer