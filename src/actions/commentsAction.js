import axios from 'axios'

export const COMMENTS_FETCH = 'COMMENTS_FETCH'
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS'
export const COMMENTS_FAILURE = 'COMMENTS_FAILURE'

export const COMMENTS_POST = 'COMMENTS_POST'
export const COMMENTS_POST_SUCCESS = 'COMMENTS_POST_SUCCESS'
export const COMMENTS_POST_FAILURE = 'COMMENTS_POST_FAILURE'

export const fetchComments = project_id=> dispatch => {
    dispatch({type: COMMENTS_FETCH})
    axios
    .get(`${process.env.REACT_APP_HOST}/comments/byproject/${project_id}`)
    .then(res => {
        dispatch({type: COMMENTS_SUCCESS, payload:res.data})
    })
    .catch(err => dispatch({type: COMMENTS_FAILURE, payload: err}))
}

export const postComments = post => dispatch => {
    dispatch({type: COMMENTS_POST})
    axios.post(`${process.env.REACT_APP_HOST}/comments`, post)
    .then(res => {
        dispatch({type: COMMENTS_POST_SUCCESS, payload:res.data})
    })
    .catch(err => dispatch({type:COMMENTS_POST_FAILURE, payload:err}))
}