import React, {Component} from 'react';
import NewsList from "./../../components/NewsList/Articles";
import


class Home extends Component {

    constructor(){
        super();
        this.state = {
            articles: []
        }
    }


    componentDidMount() {
        store.getS
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
            <NewsList articles={this.state.articles} />
        );
    }
}

export default Home;
