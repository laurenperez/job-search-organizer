import React, { Component } from 'react';


class AddJob extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return(
			<div id='add-job-component'>
				<h1>Add a new job</h1>
				<form id='add-job' method='post' action='#'>
					<h5>Position Title</h5>
					<input type='text' name='title'/> <br />
					<h5>Company Name</h5>
					<input type='text' name='companyName' />
					<h5>Location</h5> 
					<input type='text' name='location'/> 
					<h5>Key Words</h5>
					<input type='text' placeholder='Seperate with commas' name='keyWords'/> 
					<h5>Job Source</h5>
					<input type='text' name='jobSource' placeholder='i.e Indeed'/> 
					<h5>Job URL</h5>
					<input type='url' name='jobUrl'/>
					<h5>Posted Salary</h5>
					<input type='number'/>
					<h5>Expected Salary</h5>
					<input type='number' name='expectedSalary'/>
					<h5>Application Submission</h5>
					<input type='date' name='app-submit-date'/>
					<h5>Contact Info</h5>
						<h6>Email</h6>
						<input type='email' name='email' />
						<h6>Phone</h6>
						<input type='tel' name='phone' /> 
						<h6>Name</h6>
						<input type='text' name='name' /> <br />
					<button type='submit' id='add-submit'>Add Job</button>
				</form>
			</div>
		)
	}
}

export default AddJob;