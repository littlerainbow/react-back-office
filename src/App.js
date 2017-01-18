import React, {Component} from 'react';
import './App.css';
import Layout from "./components/Layout/Layout"
import "./components/Layout/Layout.css"
import { connect } from 'react-redux'

function mapStateToProps (store) {
    return {
        articles: store.articles.articlesList,
        currentArticle: store.currentArticle.articleIndex
    }
}


class App extends Component {
    render() {
        return (
            <Layout>
                {this.props.children}
            </Layout>
        );
    }
}


export default connect(mapStateToProps)(App)

