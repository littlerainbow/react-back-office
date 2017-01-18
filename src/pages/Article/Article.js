import React, {Component} from 'react';
import {connect} from "redux";

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
            <Article article={this.props.article} />
        )
    }
}
function mapStateToProps(store) {
    return { article: store.article.articleIndex }
}
export default connect(mapStateToProps)(Article);

