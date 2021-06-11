// Desculpe por isso

export default function color({ pokemon }) {
	let color = "";
	const type = pokemon.types[0].type.name;

	if (type === "bug") {
		color = "#a6d44a";
	} else if (type === "water") {
		color = "#67a8e9";
	} else if (type === "normal") {
		color = "#a5a8ac";
	} else if (type === "fighting") {
		color = "#e9678c";
	} else if (type === "flying") {
		color = "#a5bbe9";
	} else if (type === "poison") {
		color = "#bc82d6";
	} else if (type === "rock") {
		color = "#d1c4a1";
	} else if (type === "ground") {
		color = "#e98e60";
	} else if (type === "ghost") {
		color = "#6a7cb4";
	} else if (type === "steel") {
		color = "#81a2ad";
	} else if (type === "fire") {
		color = "#ffb27b";
	} else if (type === "grass") {
		color = "#80c979";
	} else if (type === "electric") {
		color = "#fde26a";
	} else if (type === "psychic") {
		color = "#ff8b8f";
	} else if (type === "ice") {
		color = "#a2d6ce";
	} else if (type === "dragon") {
		color = "#358edb";
	} else if (type === "dark") {
		color = "#7f7a88";
	} else if (type === "fairy") {
		color = "#f1aded";
	}

	return color;
}
