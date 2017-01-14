import React, {Component} from 'react';

class Article extends Component {

    constructor(){
        super();

    }


    componentDidMount() {
        fetch("http://localhost:3030/:id")
            .then(response => {
                return response.json()
            })
            .then(articles => {
                this.setState({articles})
            });
    }

    render() {
        return (
            {/*<Article articles={this.state.articles} />*/}
        );
    }
}

export default Article;

