import React, {Component} from 'react';

class Article extends Component {

    constructor() {
        super();

    }


    componentWillMount() {
        // fetch(`http://localhost:3030/${this.props.params.id}`)
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(articles => {
        //         this.setState({articles})
        //     });
    }

    render() {
        return (
            {/*<Article article={this.state.article} />*/}
        );
    }
}

export default Article;

