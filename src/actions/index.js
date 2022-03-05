import _ from 'lodash';
import jsonplaceholder from "../apis/jsonplaceholder";

export const fetchPostsAndUsers = () => {

    return async (dispatch, getState) => {
                await dispatch(fetchPosts());
        const userIds = _.uniq(_.map(getState().posts, 'userId')); // get all the userId's in posts object // uniq gets just the uniq values.

        console.log(userIds);

        userIds.forEach(id => dispatch(fetchUser(id)));
    }
}

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
    return  async dispatch => {
        const response = await jsonplaceholder.get(`/users/${id}`)

        dispatch(
            {
                type: 'FETCH_USER',
                payload: response.data
            }
        )
    }
}

// export const fetchUser = (id) => {
//     return  dispatch => {
//         _fetchUser(id, dispatch);
//     }
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonplaceholder.get(`/users/${id}`)
//
//     dispatch(
//         {
//             type: 'FETCH_USER',
//             payload: response.data
//         }
//     )
// })
