import React from 'react'

export default function Form(props) {
  return (
		<form>
			<div className="input-group mb-3">
				<button className="btn btn-outline-secondary" type="button" id={props.id} onClick={() => props.handleAddClick(props.step)}>Add</button>
				<input type="text" className="form-control" placeholder="To-Do" aria-label="To-Do" aria-describedby={props.id} />
			</div>
		</form>
  )
}
