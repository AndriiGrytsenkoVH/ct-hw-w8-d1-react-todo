import React, { useState } from 'react'

export default function Form(props) {
	const [text, setText] = useState('');

	function handleChange(newText){
		setText(newText)
	}

  return (

		<div className="input-group mb-3">
			<button className="btn btn-outline-secondary" type="button" id={props.id} onClick={() => props.handleAddClick(text)}>Add</button>
			<input type="text" className="form-control" placeholder="To-Do" aria-label="To-Do" aria-describedby={props.id} onChange={ handleChange }/>
		</div>

  )
}
