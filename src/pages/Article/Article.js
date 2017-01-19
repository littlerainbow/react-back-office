import React, {Component} from 'react';
import {connect} from "redux";
import ArticleP from "./Article/Article";
import './NewsList/Articles.css';

class Article extends Component {

    constructor() {
        super();

    }

    componentWillMount() {
        fetch(`http://localhost:3030/articles/${id}`)
            .then(response => {
                return response.json()
            })
            .then(article => {
                dispatch({
                    type: "FETCH_ARTICLE_COMPLETE",
                    payload: article
                })
            });
    }

    render() {
        return (
            <ArticleP currentArticle={this.props.currentArticle} title={this.props.currentArticle.title} />
        )
    }
}

function mapStateToProps(state) {
    return { article: state.article.articleIndex }
}

export default connect(mapStateToProps)(Article);

