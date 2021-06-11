import ListaPokemon from "./components/ListaPokemon/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<Navbar />
			<Route>
				<ListaPokemon exact path="/" />
			</Route>
		</Router>
	);
}

export default App;
