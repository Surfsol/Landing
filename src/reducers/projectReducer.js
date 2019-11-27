import { PRO_FETCH, PRO_SUCCESS, PRO_FAILURE} from '../actions/projects'

const initialState = {
    projects:[],
    isfetching: false,
    error:""
}

const projectAll = (state = initialState, action) => {
    switch (action.type){
        case PRO_FETCH:
            return{
                ...state,
                isfetching: true,
                error:""
            }
        case PRO_SUCCESS:
            return{
                ...state,
                projects:action.payload,
                isfetching:false,
                error:""
            }
        case PRO_FAILURE:
            return{
                ...state,
                error:action.payload,
                isfetching:false
            }
        default:
            return state;

    }
}
export default projectAll