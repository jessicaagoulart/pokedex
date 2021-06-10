import Navbar from "./components/Navbar/index";
import ListaPokemon from "./components/ListaPokemon/index";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<Router>
			{" "}
			<Navbar />
			<ListaPokemon />
		</Router>
	);
}

export default App;
