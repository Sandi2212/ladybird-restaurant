import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <main>
          <div className="page-section">
            {/* <Home /> */}
            <div className="sticky-side"></div>
          </div>
          <div className="page-section">
            {/* <Blurb /> */}
            <div className="sticky-side"></div>
          </div>
          <div className="page-section">
            <div className="sticky-side"></div>
            {/* <Menus /> */}
          </div>
          <div className="page-section">
            {/* <About /> */}
            <div className="sticky-side"></div>
          </div>
          <div className="full-screen-image"></div>
          <div className="page-section">
            <div className="sticky-side"></div>
            {/* <Events /> */}
          </div>
          <div className="page-section">
            {/* <Contact /> */}
            <div className="sticky-side"></div>
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
