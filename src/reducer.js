const reducer = (state, action) => {

    switch (action.type) {
        //   set loading state 
        case "LOADING":
            return {
                ...state,
                isLoading: true,
            };
        //   fetch data 
        case "GET_DATA":
            return {
                ...state,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
                isLoading: false,
            };
        //  remove news from home 
        case "REMOVE_NEWS":
            return {
                ...state,
                hits: state.hits.filter((hit) => hit.objectID !== action.payload.id),
            };
        //  set seach query 
        case "SEARCH_NEWS":
            return {
                ...state,
                query: action.payload.searchQuery,
            };
        //   view next page 
        case "NEXT_PAGE":
            let nextPagePumber = state.page + 1;
            if (nextPagePumber >= state.nbPages) {
                nextPagePumber = 0;
            }
            return {
                ...state,
                page: nextPagePumber,
            };
        // view prev page 
        case "PREV_PAGE":
            let prevPageNumber = state.page - 1;
            if (prevPageNumber <= 0) {
                prevPageNumber = 0;
            }
            return {
                ...state,
                page: prevPageNumber,
            };
    }
};
export default reducer;
