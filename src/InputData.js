import React, { Component } from 'react';

import './App.css';

class InputData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      location : "",
      message: ""
    };
  }
  handleChange(event) {

   this.setState({[event.target.id]: event.target.value});
 }
 saveFeed(event) {
   event.preventDefault();
   console.log(this.state);
   this.props.addFeed(this.state);
   this.props.history.push("/list");
 }
  render() {
    return (
      <div className="row">
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <div className="row">
                <form id="storyInput" className="col s12" onSubmit={this.saveFeed.bind(this)}>
                  <div className="row">
                    <div>
                      <center><h3>Share Your Story</h3></center>
                    </div>
                    <div className="input-field col s12">
                      <i className="material-icons prefix">mode_edit</i>
                      <input id="title" type="text" className="validate" value={this.state.title} onChange={this.handleChange.bind(this)} />
                      <label htmlFor="icon_prefix">Title for your story</label>
                    </div>
                    <div className="input-field col s6">
                      <i className="material-icons prefix">mode_edit</i>
                      <input id="location" type="tel" className="validate"  value={this.state.location} onChange={this.handleChange.bind(this)} />
                      <label htmlFor="icon_telephone">Location</label>
                    </div>
                    <div className="row">
                        <div className="row">
                          <div className="input-field col s12">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea id="message" className="materialize-textarea"  value={this.state.message} onChange={this.handleChange.bind(this)} ></textarea>
                            <label htmlFor="icon_prefix2">textarea</label>
                          </div>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputData;
