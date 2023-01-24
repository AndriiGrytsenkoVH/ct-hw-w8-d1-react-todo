import { useState } from "react";
import Form from "./components/Form";
import ToDo from "./components/ToDo";


function App() {

	const [toDoList, setToDoList] = useState({});
	const [count, setCount] = useState(0);

	function handleAddClick(newText){
		let newToDoList = toDoList;
		newToDoList[count] = <ToDo text={newText} id={`todo-${count}`} />;
		setToDoList(newToDoList);
		setCount(count + 1);
	}

	function handleDeleteClick(){

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
