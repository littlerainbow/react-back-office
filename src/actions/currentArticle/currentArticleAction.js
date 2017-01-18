export default function backToNewsList() {
    return function () {
        fetch("http://localhost:3030/articles")
            .then(response => {
                return response.json()
            })
            .then(articles => {
                dispatch({
                    type: "FETCH_ARTICLES_COMPLETE",
                    payload: articles
                })
            });
    }
}