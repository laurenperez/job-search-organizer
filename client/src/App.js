import React, { Component } from 'react';
import './App.css';
import JobList from './JobList';
import JobData from './JobData';
import Auth from './Auth';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Auth} />
          <Route exact path="/joblist" component={JobList} />
          <Route path="/JobData/:id" component={JobData} />
        </div>
      </Router>
    );
  }
}




//this is the ES6 equivalent as “module.exports = router;” that we use in the backend node exports
export default App;
