function App() {
	return (
		<div>
			<AppTitle />
		</div>
	);
}

export default App;

function onClickHandler(event) {
	console.log(event);
}

function AppTitle() {
	return (
		<div>
			<h1>Code With Hichem</h1>
			<button
				// onClick={(e) => onClickHandler(e)}
				// onMouseOver={(e) => onClickHandler(e)}
				// onMouseOut={(e) => onClickHandler(e)}
				// onMouseMove={(e) => onClickHandler(e)}
				// onMouseDown={(e) => onClickHandler(e)}
				// onMouseUp={(e) => onClickHandler(e)}
				onDoubleClick={(e) => onClickHandler(e)}
			>
				Button
			</button>
		</div>
	);
}
