import { useState } from "react";
import Form from "./components/Form";
import ToDo from "./components/ToDo";


function App() {

	const [toDoList, setToDoList] = useState({});
	const [count, setCount] = useState(0);

	function handleAddClick(text){
		let newToDoList = toDoList;
		newToDoList[count] = <ToDo text={text} id={`todo-${count}`} />;
		setToDoList(newToDoList);
		setCount(count + 1);
	}

	function handleDeleteClick(){

	}

	let test = {
		'1': <h1>One</h1>,
		'2': <h1>Two</h1>,
		'3': <h1>Three</h1>,
	}

	return (
		<>
			<h1 className="text-center my-4">Today I Will:</h1>
			<div className="container-sm">
				<Form className="my-4" handleAddClick={handleAddClick}/>
				<ul className="list-group">
					{Object.values(toDoList)}
				</ul>
			</div>
		</>
		);
}

export default App;
