import React from 'react'

class Form extends React.Component{
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
	    this.setState({value: event.target.value});  
	}

	handleSubmit(event) {
		this.handleAddClick(this.state.value);
		event.preventDefault();
	}

  	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<div className="input-group mb-3">
					<button className="btn btn-outline-secondary" type="submit" id={this.props.id}>Add</button>
					<input type="text" className="form-control" placeholder="To-Do" aria-label="To-Do" aria-describedby={this. props.id} onChange={ this.handleChange }/>
				</div>
  			</form>
		)
	}
}

export default Form;
