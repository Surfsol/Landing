import {
  ICONCARD_FETCH,
  ICONCARD_SUCCESS,
  ICONCARD_FAILURE
} from "../actions/iconCard-actions";

const initialState = {
  list: [],
  isfetching: false,
  error: ""
};

const ICONCARD = (state = initialState, action) => {
  switch (action.type) {
    case ICONCARD_FETCH:
      return {
        ...state,
        isfetching: true,
        error: ""
      };
    case ICONCARD_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isfetching: false,
        error: ""
      };
    case ICONCARD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isfetching: false
      };
    default:
      return state;
  }
};
export default ICONCARD;
