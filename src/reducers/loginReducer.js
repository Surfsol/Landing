import {
  LOGIN_FETCH,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/loginAction";

const initialState = {
    user:[],
    isfetching:false,
    error: []
}

const loginReducer = (state = initialState, action) => {
    switch (action.type){
        case LOGIN_FETCH:
            return{
                ...state,
                isfetching:true,
                error:""
            };
        case LOGIN_SUCCESS: 
            return{
                ...state,
                isfetching:false,
                user: action.payload,
                error:""
            };
        case  LOGIN_FAILURE:
            console.log(action.payload)
            return{
                ...state,
                isfetching:false,
                error: action.payload
            }
        default:
            return state;
    }
}
export default loginReducer