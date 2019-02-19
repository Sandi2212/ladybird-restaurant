import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ChefLogin from "./components/ChefLogin/ChefLogin";
import Axios from "axios";

class App extends Component {
    state = {
        headerOffset: "",
        chefLoggedOn: false
    };

    getOffsetHeight = height => {
        this.setState({ headerOffset: height });
    };

    isChefLoggedOn = async () => {
        const respnse = await Axios.get("/auth/current_user");
        const chefLoggedOn = respnse.data && true;
        this.setState({chefLoggedOn});
    }

    componentDidMount() {
        this.isChefLoggedOn()
    }

    render() {
        return (
          <div className="App">
            <Header getOffsetHeight={this.getOffsetHeight} />
            <Switch>
                <Route exact path="/" render={() => <Main {...this.state} />}/>
                <Route path="/chef-login" render={() => <ChefLogin headerOffset={this.state.headerOffset} />} />
            </Switch>
            <Footer />
          </div>
        );
    }
}

export default App;
