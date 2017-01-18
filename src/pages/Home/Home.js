import React, {Component} from 'react';
import NewsList from "./../../components/NewsList/Articles";
import {getArticles} from "./../../actions/Articles/articlesAction"
import {connect} from "react-redux";


function mapStateToProps(state) {
    return { articles: state.articles.articlesList }
}

class Home extends Component {

    constructor(){
        super();
    }


    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getArticles())
    }

    render() {
        return (
            <NewsList articles={this.props.articles} />
        );
    }
}

export default connect(mapStateToProps)(Home);



