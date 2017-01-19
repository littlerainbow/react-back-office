import React, {Component} from 'react';
import Article from "./Article";
import './Articles.css';



class Articles extends Component {

    render() {
        const { articles } = this.props;
        return (
            <div>
                {articles && articles.map((article, index) => <Article title={article.title} author={article.author} content={article.content} id={article._id} key={index} />)}
            </div>
        )
    }
}
export default Articles;
