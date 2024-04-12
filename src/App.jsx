/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { Link } from "react-router-dom";

function App() {
	return (
		<div>
			<TodoList />
		</div>
	);
}

export default App;

function TodoList() {
	const [newTodo] = useState("");

	const {
		data: todos,
		isLoading,
		error,
		setData: setTodos,
	} = useFetch("http://localhost:3000/todos");

	function toggleTodo(id) {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});

		setTodos(newTodos);
	}

	async function removeTodo(id) {
		await fetch(`http://localhost:3000/todos/${id}`, {
			method: "DELETE",
		});

		const newTodos = await fetch(`http://localhost:3000/todos`);

		const parsedNewTodos = await newTodos.json();

		setTodos(parsedNewTodos);
	}

	useEffect(() => {
		console.log("component rendered for the first time");
	}, []);

	useEffect(() => {
		console.log("input is", newTodo);
	}, [newTodo]);

	return (
		<div>
			<h2>Todo List</h2>

			<Link to="/create-todo">Create Todo</Link>

			{isLoading ? <p>Loading...</p> : null}

			{error ? <p style={{ color: "red" }}>{error}</p> : null}
			<ul>
				{todos
					? todos.map((todo) => (
							<TodoItem
								key={todo.id}
								todo={todo}
								toggleTodo={toggleTodo}
								removeTodo={removeTodo}
							/>
					  ))
					: null}
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
			<Link to={`/todos/${todo.id}`}>Details</Link>
		</li>
	);
}
