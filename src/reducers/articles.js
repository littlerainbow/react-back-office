export default function articles(state = {
    articles: {
        fetching: false,
        fetched: false,
        error: null,
        articlesList: []
    }
}, action) {
    switch (action.type) {
        case 'FETCH_ARTICLES_COMPLETE':
            return {
                ...state,
                articles: action.payload,
                fetched: true,
                fetching: false,
                error: null
            }
        case 'FETCH_ARTICLES':
            return {
                ...state,
                fetching: true
            }
        case 'FETCH_ARTICLES_ERROR':
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
            return state
    }
}