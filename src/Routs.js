import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import React from 'react'
import App from './App'
import Home from './pages/Home/Home'
import Article from './components/Article/Article';
import {Provider} from 'react-redux';
import store from './store/createStore';

export default class Routs extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Home}></IndexRoute>

                        <Route path="articles" component={Article}>
                            <Route path=":id" component={Article}></Route>
                        </Route>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

