import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";

export default function TodoDetails() {
	let params = useParams();
	console.log(params);

	const {
		data: todo,
		isLoading,
		error,
	} = useFetch(`http://localhost:3000/todos/${params.todoId}`);

	return (
		<div>
			{isLoading ? <p>Loading...</p> : null}

			{error ? <p>{error}</p> : null}

			{todo ? (
				<div>
					<h2>{todo.text}</h2>
					<p>{todo.completed ? "Completed" : "Not completed"}</p>
				</div>
			) : null}
		</div>
	);
}
