import { TECH_FETCH, TECH_SUCCESS, TECH_FAILURE} from '../actions/tech'

const initialState = {
    techs:[],
    isfetching: false,
    error:""
}

const techAll = (state = initialState, action) => {
    switch (action.type){
        case TECH_FETCH:
            return{
                ...state,
                isfetching: true,
                error:""
            }
        case TECH_SUCCESS:
            return{
                ...state,
                isfetching:false,
                error:""
            }
        case TECH_FAILURE:
            return{
                ...state,
                error:action.payload,
                isfetching:false
            }
        default:
            return state;

    }
}
export default techAll