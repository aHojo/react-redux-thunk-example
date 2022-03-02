import jsonplaceholder from "../apis/jsonplaceholder";

export const fetchPosts = () => {

    // can only return a function here because of the redux-thunk middleware that we are applying.
    return async dispatch  => {
        const response = await jsonplaceholder.get('/posts');
         dispatch({
            'type': 'FETCH_POSTS',
            'payload': response
        })
    }
}