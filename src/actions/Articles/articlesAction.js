export default function toCurrentArticle(id) {
    return function (dispatch) {
        fetch(`http://localhost:3030/${id}`)
            .then(response => {
                return response.json()
            })
            .then(articles => {
                dispatch({
                    type: "FETCH_ARTICLE_COMPLETE",
                    payload: articles
                })
            });
    }
}
