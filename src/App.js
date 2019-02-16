import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/Main'
import MailChimp from './components/MailChimp';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Main />
        <MailChimp/>
      </div>
    );
  }
}

export default App;
