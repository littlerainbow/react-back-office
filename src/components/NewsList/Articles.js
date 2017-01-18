import React, {Component} from 'react';
import Article from "./Article";
import './Articles.css';



class Articles extends Component {

    articlesMap() {
        if(this.props.articles) {
            this.props.articles.map(({title, content, author}, i) => {
                return <Article key={i} title={title} content={content}/> 
            })
        }
    }

    render() {
        
        if(this.props.articles) {

            this.props.articles.map(({title, content, author}, i) => {
                return <Article key={i} title={title} content={content} /> 
            })
        } else {
            return null
        }
    }
}
export default Articles;
