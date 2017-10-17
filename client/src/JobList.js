import React, { Component } from 'react';
import './App.css';

class JobList extends Component {
  constructor(props){
    super(props);
    this.state = {
      jobs: []
    }
    //thisis the binding line necessary to keep this bound correctly
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  componentDidMount(){
    fetch("/jobs")
    .then((response) => response.json())
    .then((response) => this.setState({jobs: response}))
  }

  render() {
    return (
      <div className="App">
        {this.state.jobs.map((item,index) => (<a href="/#"  key={index}>{item.title} at {item.companyName} city: {item.location}</a>))}
      </div>
    );
  }
}

//this is the ES6 equivalent as "module.exports = router;" that we use in the backend node exports
export default JobList;
