import pokeball from "../../assets/img/pokeball.png";
import "../../assets/css/navbar.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

export default function Navbar() {
	return (
		<Router>
			<div className="navbar">
				<img src={pokeball} alt={"pokebola"} />
				<Link to="/">
					<h1>Pokedéx</h1>
				</Link>
			</div>
		</Router>
	);
}
