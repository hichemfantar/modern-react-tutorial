import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateTodo() {
	const [newTodo, setNewTodo] = useState("");

	const navigate = useNavigate();

	async function addTodo() {
		try {
			const response = await fetch("http://localhost:3000/todos", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ text: newTodo, completed: false }),
			});

			setNewTodo("");

			const result = await response.json();
			console.log("Success:", result);

			navigate("/");
		} catch (error) {
			console.error("Error:", error);
		}
	}

	return (
		<div>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					addTodo();
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
		</div>
	);
}
