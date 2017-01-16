export default function articles(state = {
    currentArticle: {
        fetching: false,
        fetched: false,
        error: null,
        articleIndex: null
    }
}, action) {
    switch (action.type) {
        case 'FETCH_ARTICLE_COMPLETE':
            return {
                ...state,
                articleIndex: action.payload,
                fetched: true,
                fetching: false
            }
        case 'FETCH_ARTICLE':
            return {
                ...state,
                fetching: true
            }
        case 'FETCH_ARTICLE_ERROR':
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
            return state
    }
}