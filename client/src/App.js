import React, { Component } from 'react';
import './App.css';
import AddJob from './AddJob';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      jobs: []
    }
    //this is the binding line necessary to keep this bound correctly
    //this.componentDidMount = this.componentDidMount.bind(this)
  }
  // componentDidMount(){
  //   fetch("/jobs")
  //   .then((response) => response.json())
  //   .then((response) => this.setState({jobs: response}))
  // }

  render() {
    return (
      <div>
        <AddJob />
      </div>
    );
  }
}



//this is the ES6 equivalent as "module.exports = router;" that we use in the backend node exports
export default App;
