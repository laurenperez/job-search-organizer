import React, { Component } from 'react';
// import App from './App';
import JobList from './JobList';

class JobData extends Component {
  constructor(props){
    super(props);
    console.log('this is my props', props);
      this.state ={
       id: props.match.params.id,
       jobData : ''
      }

 }

 componentDidMount(){
    let url = `/jobs/${this.state.id}/`
   fetch(url)
    .then((response) => response.json())
    .then((response) => this.setState({jobData: response}))
  }


 render() {

   var posted = this.state.jobData.postedSalary
   var expected = this.state.jobData.expectedSalary
   var diff = function (a, b){
     return (Math.floor((a/b)*100));
   };

   return (
      <div className="App list-container">
        {/*<h2>Job Id: {this.state.id}</h2>*/}
        <h2>Job Title: {this.state.jobData.title}</h2>
        <h3>Company: {this.state.jobData.companyName}</h3>
        <p>Location: {this.state.jobData.location}</p>
        <hr />
        <h3>Key Words from Job Description:</h3>
        <p>{this.state.jobData.keyWords}</p>
        <h3>I found this job via: </h3>
        <p>{this.state.jobData.jobSource}</p>
        <p>URL to the listing: {this.state.jobData.jobURL}</p>
        <hr />
        <h3>Posted Salary: {this.state.jobData.postedSalary}</h3>
        <h3>My Desired Salary: {this.state.jobData.expectedSalary}</h3>
        <h4>{diff(posted, expected)} % Desired Salary</h4>
        <hr />
        <h2>Main Contact</h2>
        <h3>Name: {this.state.jobData.contact !== undefined ? this.state.jobData.contact.name : ''}</h3>
        <p>Email: {this.state.jobData.contact !== undefined ? this.state.jobData.contact.email : ''}</p>
        <p>Phone: {this.state.jobData.contact !== undefined ? this.state.jobData.contact.phone : ''}</p>
        <a href="/">Back To List</a>
      </div>
    );
  }
}

export default JobData;
