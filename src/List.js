import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class List extends Component {
  render() {
    return (
        <div>
          {this.props.feeds.length == 0  ?
            (<div> <center><h2 className='header'>GoTo <Link to="/input">InputData</Link> page and submit your first feed</h2></center></div>):""}
          {this.props.feeds.map((feed, index) => (

            	<div className="row">
                <div className="col s12 m12">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">Title : {feed.title}</span><br/>
                      <span>Location : {feed.title}</span>
                      <p><br/> Story :{feed.message}</p>
                    </div>
                  </div>
                </div>
              </div>
          ))}

        </div>
    );
  }
}

export default List;
