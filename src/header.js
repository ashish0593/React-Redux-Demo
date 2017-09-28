import React, { Component } from 'react';
import {Link} from 'react-router-dom';


// import Input from "./InputData";
// import List from "./List";

class Header extends Component {
  render() {
    return (

      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">Logo</a>
          <ul className="left hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/input">InputData</Link></li>
            <li><Link to="/list">List</Link></li>
          </ul>
        </div>

      </nav>

    );
  }
}

export default Header;
