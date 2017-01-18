import React, {Component} from 'react';
import NewsList from "./../../components/NewsList/Articles";
import {connect} from "react-redux";


function mapStateToProps(store) {
    return { articles: store.articles.articlesList }
}

class Home extends Component {

    constructor(){
        super();
        // this.state = {
        //     articles: []
        // }
    }


    componentWillMount() {
        //event start fatch
        // fetch("http://localhost:3030/articles")
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(articles => {
        //         //this.setState({articles}) dispatch event fetch end and data
        //     });
    }

    render() {
        return (
            <NewsList articles={this.props.articles} />
        );
    }
}

export default connect(mapStateToProps)(Home);



