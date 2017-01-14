
export default function currentArticle(state = [], action) {
    switch (action.type) {
        case 'FETCH_ARTICLES':
            return []
        default:
            return state
    }
}