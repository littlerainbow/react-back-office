import React, {Component} from 'react';
import {Link} from 'react-router'
import './Article.css';

class Article extends Component {
	constructor(){
		super()
	}
    render() {
        return (
            <div>
                <article>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.content}</p>
                    <p className="article-author">{this.props.author}</p>
                    <span className="article-more"><Link to={"/articles/" + this.props.id}>Read More</Link></span>
                </article>
            </div>
        );
    }
}

export default Article;
