export default (state, action) => {
    switch (action.type) {
        case 'UPDATE_POST_SUCCESS':
            return {
                ...state,
                posts: action.payload
            }
        case 'UPDATE_POST_FAILURE':
            return {
                ...state,
            }

        default:
            return state;
    }
}