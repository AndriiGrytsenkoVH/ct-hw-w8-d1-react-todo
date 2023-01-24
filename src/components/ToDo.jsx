import React from 'react'

export default function ToDo(props) {
  return (
    <li class="list-group-item">
        <input class="form-check-input me-1" type="checkbox" value="" id={props.id} />
        <label class="form-check-label stretched-link" for={props.id}>props.text</label>
	</li>
  )
}
