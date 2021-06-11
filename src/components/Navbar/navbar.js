import pokeball from "../../assets/img/pokeball.png";
import "../../assets/css/navbar.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "../../assets/img/logo.png";

export default function Navbar() {
	return (
		<Router forceRefresh={true}>
			<div className="navbar">
				<Link to="/">
					<img className="logo" src={logo} alt={"pokedex"} />
				</Link>
				<img src={pokeball} alt={"pokebola"} />
			</div>
		</Router>
	);
}
