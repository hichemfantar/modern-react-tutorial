import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreateTodo from "./CreateTodo";
import TodoDetails from "./TodoDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/create-todo",
		element: <CreateTodo />,
	},
	{
		path: "/todos/:todoId",
		element: <TodoDetails />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
