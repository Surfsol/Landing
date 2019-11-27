import { ADD_FETCH, ADD_SUCCESS, ADD_FAILURE} from '../actions/addProject'

const initialState = {
    add:[],
    isfetching: false,
    error:""
}

const addProject = (state = initialState, action) => {
    switch (action.type){
        case ADD_FETCH:
            return{
                ...state,
                isfetching: true,
                error:""
            }
        case ADD_SUCCESS:
            return{
                ...state,
                add:action.payload,
                isfetching:false,
                error:""
            }
        case ADD_FAILURE:
            return{
                ...state,
                error:action.payload,
                isfetching:false
            }
        default:
            return state;

    }
}
export default addProject