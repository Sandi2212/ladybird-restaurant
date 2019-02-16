import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/Main'
import MailChimp from './components/Mailchimp/MailChimp';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Main />
        {/* <Footer /> */}
       
      </div>
    );
  }
}

export default App;
