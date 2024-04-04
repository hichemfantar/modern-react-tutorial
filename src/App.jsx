import { useState } from "react";

function App() {
	return (
		<div>
			<AppTitle />
		</div>
	);
}

export default App;

function AppTitle() {
	const [message, setMessage] = useState("Hello World");

	function onClickHandler(event) {
		console.log(event);
		setMessage("Button Clicked");
	}

	return (
		<div>
			<h1>Code With Hichem</h1>
			<p>{message}</p>
			<button onClick={(e) => onClickHandler(e)}>Button</button>
		</div>
	);
}
