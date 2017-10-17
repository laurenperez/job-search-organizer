import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
      <ul className="App">
        {this.state.jobs.map((item,index) => (<li key={index}>{item.title}</li>))}
      </ul>
    );
  }
}



//this is the ES6 equivalent as "module.exports = router;" that we use in the backend node exports
export default App;
