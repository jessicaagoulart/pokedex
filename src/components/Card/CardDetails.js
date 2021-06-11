import React from "react";
import "../../assets/css/cardDetails.css";
import color from "../Colors/index";

function CardDetails({ pokemon }) {
	// const [cardDetails, setCardDetails] = useState(cardDetails.types[type.name]);
	// const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`;

	console.log(pokemon);
	// useEffect(() => {
	// 	fetch(url)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setCardDetails(data);
	// 			console.log(data);
	// 		});
	// }, []);

	return (
		<div style={{ backgroundColor: color({ pokemon }) }}>
			{pokemon.types[0].type.name}
		</div>
	);
}

export default CardDetails;
