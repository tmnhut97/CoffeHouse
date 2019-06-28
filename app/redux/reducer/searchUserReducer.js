const searchUserReducer = (state = '', action) => {
    if (action.type === 'SEARCH_USER') return action.searchValue;
    return state;
};

export default searchUserReducer;