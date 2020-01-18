import axios from 'axios'

export const COMMENTS_FETCH = 'COMMENTS_FETCH'
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS'
export const COMMENTS_FAILURE = 'COMMENTS_FAILURE'

export const fetchComments = project_id=> dispatch => {
    dispatch({TYPE: COMMENTS_FETCH})

    .get(`${process.env.REACT_APP_HOST}/comments/byproject/${project_id}`)
    .then(res => {
        dispatch({type: COMMENTS_SUCCESS, payload:res.data})
    })
    .catch(err => dispatch({type: COMMENTS_FAILURE, payload: err}))
}