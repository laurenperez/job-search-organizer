import React, { Component } from 'react';
import App from ('.App');

class Home extends Component {
  render() {
    return (
      <div className="App">
        <AddJob /> //Ari is making
        <JobList /> //Elena is making
      </div>
    );
  }
}

export default Home;
