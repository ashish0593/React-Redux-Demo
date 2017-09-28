import React, { Component } from 'react';
// import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import './App.css';
import Header from "./header";
import AppBody from "./AppBody";

// const Input = () => (<div> Input form </div>)
// const List = () => (<div> List Page </div>)

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
