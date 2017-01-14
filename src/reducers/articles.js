
export default function articles(state = [], action) {
    switch (action.type) {
        case 'FETCH_ARTICLES':
            return []
        default:
            return state
    }
}