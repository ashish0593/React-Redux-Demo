import React, { Component } from 'react';

import './App.css';

class HomeBody extends Component {
  render() {
    return (
        <div>
        <center>
          <h2 className="header"> Welcome to the React-Redux Demo </h2>
          <h5>Please Navigate to InputData page to fill out the Story Form</h5>
          <h5>On the List page you can view your submitted story</h5>
        </center>
        </div>
    );
  }
}

export default HomeBody;
