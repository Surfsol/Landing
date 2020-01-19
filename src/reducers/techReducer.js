import { TECH_FETCH, TECH_SUCCESS, TECH_FAILURE} from '../actions/tech'

const initialState = {
    techs:[
        {
          "id": 1,
          tech: "React"
        },
        {
          "id": 2,
          tech: "Redux"
        },
        {
          "id": 3,
          tech: "Responsive"
        },
        {
          "id": 4,
          tech: "Backend"
        },
        {
          "id": 5,
          tech: "Database"
        },
        {
          "id": 6,
          tech: "React Hooks"
        },
        {
          "id": 7,
          tech: "React Classes"
        },
        {
          "id": 8,
          tech: "Login Sessions"
        },
        {
          "id": 9,
          tech: "Login Cookies"
        },
        {
          "id": 10,
          tech: "Register"
        },
        {
          "id": 11,
          tech: "Forms"
        },
        {
          "id": 12,
          tech: "Material UI"
        },
        {
          "id": 13,
          tech: "ReactStrap"
        },
        {
          "id": 14,
          tech: "Http-requests"
        },
        {
          "id": 15,
          tech: "Bcryptjs"
        },
        {
          "id": 16,
          tech: "jsonwebtoken"
        },
        {
          "id": 17,
          tech: "Heroku"
        },
        {
          "id": 18,
          tech: "Node.js"
        },
        {
          "id": 19,
          tech: "Sprint"
        },
        {
          "id": 20,
          tech: "Postgresql"
        },
        {
          "id": 21,
          tech: "Sqlite3"
        }
      ],
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
                techs:action.payload,
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