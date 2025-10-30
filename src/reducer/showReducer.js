
export const ACTIONS = {
    FETCH_INIT: "FETCH_INIT",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_FAILURE: "FETCH_FAILURE",
    SET_QUERY: "SET_QUERY",
    ADD_WATCHLIST: "ADD_WATCHLIST",
    REMOVE_WATCHLIST: "REMOVE_WATCHLIST",

};

export const initialState = {
    isLoading: false,
    isError: false,
    data: [],
    query: "friends",
    watchlist: [],
};

export function showReducer(state, action) {
    switch (action.type) {
        case ACTIONS.FETCH_INIT:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case ACTIONS.FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case ACTIONS.FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case ACTIONS.SET_QUERY:
            return {
                ...state,
                query: action.payload,
            };
        case ACTIONS.ADD_WATCHLIST:

            return {
                ...state,
                watchlist: [...state.watchlist, action.payload],
            };
        case ACTIONS.REMOVE_WATCHLIST:

            return {
                ...state,
                watchlist: state.watchlist.filter((show) => show.id !== action.payload.id),
            };
        default:
            return state;
    }
}