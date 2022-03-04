import jsonplaceholder from "../apis/jsonplaceholder";

export const fetchPosts = () => {

    // can only return a function here because of the redux-thunk middleware that we are applying.
    return async dispatch  => {
        const response = await jsonplaceholder.get('/posts');
         dispatch({
            'type': 'FETCH_POSTS',
            'payload': response.data
        })
    }
}

export const fetchUser = (id) => {
    return async dispatch => {
        const response = await jsonplaceholder.get(`/users/${id}`)

        dispatch(
            {
                type: 'FETCH_USER',
                payload: response.data
            }
        )
    }
}

