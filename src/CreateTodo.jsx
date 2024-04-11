export default function CreateTodo() {
	return (
		<div>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					// AddTodo();
				}}
			>
				<input
					required
					type="text"
					placeholder="New todo"
					// onChange={(event) => {
					// 	setNewTodo(event.target.value);
					// }}
					// value={newTodo}
				/>
				<button type="submit">Add todo</button>
			</form>
		</div>
	);
}
