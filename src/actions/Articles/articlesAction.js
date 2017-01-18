export function toCurrentArticle(id) {
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
export function getArticles() {
    return function (dispatch) {
        console.log(11)
        dispatch({
            type: 'FETCH_ARTICLES'
        });

        fetch("http://localhost:3030/articles")
            .then(response => {
                return response.json()
            })
            .then(articles => {
                dispatch({
                    type: "FETCH_ARTICLES_COMPLETE",
                    payload: articles
                })
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_ARTICLES_ERROR'
                });
            });
    }
}
