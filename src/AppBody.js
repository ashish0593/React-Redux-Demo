import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Input from "./InputData";
import List from "./List";
import HomeBody from "./HomeBody";

import './App.css';

import {addFeedAction} from "./actions";


// const Input = () => (<div> Input form </div>)
// const List = () => (<div> List Page </div>)

class AppBody extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render = { () => (<HomeBody />)} />
        <Route path="/input" render = { () => ( <Input addFeed = {this.props.addFeed} history={this.props.history}/> )}/>
        <Route path="/list" render = { () => ( <List feeds = {this.props.feeds} history={this.props.history}/> )}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {feeds : state.feedsReducer.feeds}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFeed : (feed) => { addFeedAction(dispatch, feed) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppBody));
