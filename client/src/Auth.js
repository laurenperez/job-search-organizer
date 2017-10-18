import React, { Component } from 'react';
import './App.css';
import App from './App';
import JobList from './JobList';



class Auth extends Component {
  constructor(){
    super()
  }


  render() {
    return (
      <div className="list-container App">
        <h1>Job Search Organizer</h1>
        <form>
        <h3>Email:</h3>
        <input type="text" placeholder="email..."/>
        <h3>Password:</h3>
        <input type="text" placeholder="password..."/>
        <a className="jobs" href="/joblist"><h3>Sign In</h3></a>
        </form>
      </div>
    );
  }
}




//this is the ES6 equivalent as “module.exports = router;” that we use in the backend node exports
export default Auth;
