import React, {Component} from 'react';
import Navigation from "./Navigation"
import "./Navigation.css"
import Footer from "./Footer"
import "./Footer.css"


class Layout extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <main>{this.props.children}</main>
                <Footer/>
            </div>
        );
    }
}

export default Layout;

