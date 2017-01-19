import React, {Component} from 'react';
import './App.css';
import Layout from "./components/Layout/Layout"
import "./components/Layout/Layout.css"

export default class App extends Component {
    render() {
        return (
            <Layout>
                {this.props.children}
            </Layout>
        );
    }
}

