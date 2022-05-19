export default (post = [],action) => {
    switch(action.type) {
        case 'FETCH_ONE':
            return action.payload;
        case 'RESET_ONE':
            return [];
        default:
            return post;
    }
}