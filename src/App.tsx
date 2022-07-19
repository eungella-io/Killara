import "./App.scss";
import NoteApp from "./pages/NoteApp";
import WidgetApp from "./pages/WidgetApp";

function App() {
	return (
		<div className="app">
			<NoteApp />
			<WidgetApp />
		</div>
	);
}

export default App;
