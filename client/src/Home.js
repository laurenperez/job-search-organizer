import React, { Component } from 'react';
import App from './App';
import AddJob from './AddJob';
import JobList from './JobList';

class Home extends Component {
  render() {
    return (
      <div className="App">
      	<div id='home-add-job'>
	        <AddJob /> //Ari is making
	    </div>
	    <div id='home-job-list'>
	        <JobList /> //Elena is making
	    </div>
      </div>
    );
  }
}

export default Home;
