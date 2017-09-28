import React, { Component } from 'react';


import './App.css';
import Header from "./header";
import AppBody from "./AppBody";



class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <AppBody />
        </div>
    );
  }
}

export default App;
