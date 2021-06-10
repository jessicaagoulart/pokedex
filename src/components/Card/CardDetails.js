import React from "react";
import "../../assets/css/card.css";
import { useState, useEffect } from "react";
import { getPokemon } from "../../api";

function CardDetails({ pokemon }) {
	const [cardDetails, setCardDetails] = useState({});
	const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

	useEffect(() => {
		async function fetchData() {
			let response = await getPokemon(url);
			setCardDetails(response);
		}
		fetchData();
	}, []);

	return (
		<div>
			{console.log({ cardDetails })}
			<h1>oi</h1>
		</div>
	);
}

export default CardDetails;
