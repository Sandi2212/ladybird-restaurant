import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

class App extends Component {
    state = {
        headerOffset: ""
    };

    getOffsetHeight = height => {
        this.setState({ headerOffset: height });
        // let { offsetHeight } = this.refs.header;
        // console.log(offsetHeight);
    };

    render() {
        return (
            <div className="App">
                <Header getOffsetHeight={this.getOffsetHeight} />
                <Main headerOffset={this.state.headerOffset} />
                <Footer />
            </div>
        );
    }
}

export default App;
