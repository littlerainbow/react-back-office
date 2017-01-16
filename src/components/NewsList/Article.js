import React, {Component} from 'react';
import './Article.css';

class Article extends Component {


    render() {
        return (
            <div>
                {console.log(this.props)}
            </div>
        );
    }
}

export default Article;
