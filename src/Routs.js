import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router'
import React from 'react'
import App from './App'
import Home from './pages/Home/Home'
import Article from './components/NewsList/Article';
import Provider from 'react-redux';
import store from './';

export default class Routs extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Home}/>
                        <Route path="article" component={Article}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

