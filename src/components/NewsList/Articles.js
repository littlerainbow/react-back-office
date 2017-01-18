import React, {Component} from 'react';
import Article from "./Article";
import './Articles.css';

class Articles extends Component {

    render() {
        return (
            <div>
                { console.log(this)
                    // this.props.articles.map(({title, content, author}, i) => {
                    //     return <Article key={i} title={title} content={content}/>
                    
                    // })
                }
            </div>
        );
    }
}
export default Articles;
