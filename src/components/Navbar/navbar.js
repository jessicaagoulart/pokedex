import pokeball from "../../assets/img/pokeball.png";
import "../../assets/css/navbar.css";

export default function Navbar() {
	return (
		<div className="navbar">
			<img src={pokeball} />

			<h1>Pokedéx</h1>
		</div>
	);
}
