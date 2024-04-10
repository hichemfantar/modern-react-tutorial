/* eslint-disable react/prop-types */
import { useState } from "react";

function App() {
	return (
		<div>
			<TodoList />
		</div>
	);
}

export default App;

function TodoList() {
	const [todos, setTodos] = useState([
		{ id: 1, text: "Learn React", completed: false },
		{ id: 2, text: "Learn Redux", completed: false },
		{ id: 3, text: "Learn React Router", completed: false },
	]);

	const [newTodo, setNewTodo] = useState("");

	function toggleTodo(id) {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});

		setTodos(newTodos);
	}

	function clearTodos() {
		setTodos([]);
	}

	function removeCompletedTodos() {
		const newTodos = todos.filter((todo) => !todo.completed);
		setTodos(newTodos);
	}

	function removeTodo(id) {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	}

	function AddTodo() {
		const newTodoObject = {
			id: Math.random(),
			text: newTodo,
			completed: false,
		};
		const newTodos = [newTodoObject, ...todos];
		setTodos(newTodos);
		setNewTodo("");
	}

	return (
		<div>
			<h2>Todo List</h2>
			<button onClick={clearTodos}>Clear All</button>
			<button onClick={removeCompletedTodos}>Clear Completed</button>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					AddTodo();
				}}
			>
				<input
					required
					type="text"
					placeholder="New todo"
					onChange={(event) => {
						setNewTodo(event.target.value);
					}}
					value={newTodo}
				/>
				<button type="submit">Add todo</button>
			</form>

			<ul>
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						toggleTodo={toggleTodo}
						removeTodo={removeTodo}
					/>
				))}
			</ul>
		</div>
	);
}

function TodoItem(props) {
	const todo = props.todo;
	const toggleTodo = props.toggleTodo;
	const removeTodo = props.removeTodo;

	return (
		<li>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => {
					toggleTodo(todo.id);
				}}
			/>
			<span
				style={{
					textDecoration: todo.completed ? "line-through" : "none",
				}}
			>
				{todo.text}
			</span>
			<button onClick={() => removeTodo(todo.id)}>Delete</button>
		</li>
	);
}
